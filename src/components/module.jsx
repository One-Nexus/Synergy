import deepextend from '../utilities/deepMergeObjects';
import generateElementClasses from '../utilities/generateElementClasses';
import useTheme from '../hooks/useTheme';
import ModuleContext from '../context';

const Module = (props) => {
  const { children, name, styles, config, render, attributes, ...meta } = props;
  const { isComponent, isSubComponent, host, className, style, as, tag, scope, ...rest } = meta;

  const { context: prevContext } = React.useContext(ModuleContext);
  const ref = host || React.useRef();

  const [{ Tag }, setTag] = React.useState({ Tag: getTag(props) });

  /** */

  let scopeId = scope || CONFIG?.scope;

  if (scopeId && typeof scopeId !== 'string') {
    scopeId = Object.values(scopeId.default)?.[0];
  } else if (!scopeId && styles) {
    scopeId = Object.values(styles.default)?.[0];
  }

  let namespace = name || tag;

  const THEME  = prevContext.theme || useTheme();
  const THEMECONFIG = THEME.modules?.[name];
  const PROPCONFIG = typeof config === 'function' ? config(THEME) : config;
  const CONFIG = getConfig(namespace, isComponent, prevContext, [THEMECONFIG || {}, PROPCONFIG || {}]);

  const scopedCSS = (THEME?.scopedCSS ?? CONFIG?.scopedCSS) ?? false;
  const useScopeAsNamespace = (THEME?.useScopeAsNamespace ?? CONFIG?.useScopeAsNamespace) ?? false;

  if (CONFIG?.name && !name) {
    namespace = CONFIG?.name;
  }

  if (scopeId && scopedCSS) {
    namespace = useScopeAsNamespace ? scopeId : `${scopeId}-${namespace}`;
  }

  const blockNamespace = prevContext.parentModule + '__' + namespace;
  const fullNamespace = prevContext.blockNamespace + '__' + namespace;

  const STATE  = {
    ...(prevContext.isFusion && prevContext.state),
    ...rest
  }

  const CLASSNAME = generateElementClasses(props, { 
    NAMESPACE: (isComponent || isSubComponent) ? blockNamespace : namespace
  });

  const ATTRIBUTES = Tag !== React.Fragment && {
    ...attributes,
    ...getEventHandlers(rest),
    ...getWhitelistAttributes(rest),

    ...(!isFunctionComponent(Tag) && { ref }),

    ...(Tag.name === 'Component' && props.as && { 
      name: props.as.name || props.as,
      ...rest,
    }),

    style: style,
    className: className ? `${className} ${CLASSNAME}` : `${CLASSNAME}`,
  }

  /** */

  const nextContext = {
    ...prevContext,

    theme: THEME,
    state: STATE,
    config: CONFIG,
    rootConfig: isComponent ? prevContext.rootConfig : CONFIG,

    namespace,
    blockNamespace,
    parentModule: (isComponent || isSubComponent) ? prevContext.parentModule : namespace,

    ...((!isComponent && props.as) && { owner: namespace }),

    [namespace]: {
      ...STATE, setTag
    },

    isFusion: isFunctionComponent(props.as) && !isComponent,
  }

  /** */

  React.useEffect(() => {
    let node = ref.current;

    if (!node) { 
      return;
    }

    // Last ditch effort to get underlying DOM node
    if (!(node instanceof HTMLElement)) {
      node = ReactDOM.findDOMNode(node);
    }

    if (props.isComponent && prevContext.namespace === namespace && prevContext.owner) {
      prevContext[namespace].setTag({ Tag: React.Fragment });
    }
  }, []);

  /** */
  return (
    <ModuleContext.Provider value={{ context: nextContext }}>
      <Tag {...ATTRIBUTES}>
        {render || children}
      </Tag>
    </ModuleContext.Provider>
  );
}

Module.Fragment = ({ children, ...props }) => <div style={{ display: 'contents' }} {...props}>{children}</div>

Module.modifiers = props => ([...Object.keys(props), ...(props.modifiers || [])]);

Module.findValueFromState = (object, state) => object[Object.keys(state).find($ => object[$])];

Module.findPropFromConfig = (state, object) => {
  const key = Module.modifiers(state).find($ => object[$])
  const value = object[key];

  return [key, value];
}

Module.props = (props) => {
  const newProps = { ...props };

  delete newProps.component;

  return newProps;
}

export default Module; 

/** */
export const Component = props => {
  return <Module isComponent {...props} />;
}

/** */
export const SubComponent = props => {
  return <Module isComponent {...props} />;
}

/** */
function getEventHandlers(props) {
  return Object.keys(props).filter(key => isEventHandler(key)).reduce((accumulator, key) => {
    accumulator[key] = props[key]
    
    return accumulator;
  }, {})
}

/** */
function getWhitelistAttributes(props) {
  let inputAttributes = {}

  const whitelist = [
    'type',
    'value',
    'readonly',
    'disabled',
    'size',
    'maxlength',
    'autocomplete',
    'autofocus',
    'min',
    'max',
    'multiple',
    'pattern',
    'placeholder',
    'selected',
    'required',
    'step',
    'src'
  ];

  for (let prop in props) {
    if (whitelist.includes(prop)) {
      inputAttributes[prop] = props[prop];
    }
  }

  return inputAttributes;
}

/** */
function isEventHandler(key) {
  return key.startsWith('on') && key[2] === key[2].toUpperCase();
}

/** */
function getTag(props) {
  if (typeof props.as === 'function' && props.as.name[0] === props.as.name[0].toUpperCase()) {
    return props.as;
  }

  if (typeof props.as === 'function' && props.as?.prototype?.isReactComponent) {
    return props.as;
  }

  if (props.component) {
    return props.component;
  }

  if (typeof props.as === 'string') {
    return Component;
  }

  if (props.tag) {
    return props.tag;
  }

  return 'div';
}

/** */
function getConfig(namespace, isComponent, prevContext, configs) {
  if (isComponent) {
    return prevContext.config?.[namespace] || prevContext.rootConfig[namespace];
  }

  return deepextend(...configs);
}

/** */
function isFunctionComponent(component) {
  return typeof component === 'function' && component.name[0] === component.name[0].toUpperCase();
}