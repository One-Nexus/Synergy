import { init } from './synergy';

export default ({ globals, modules, theme, options, callback, ...props }) => {
  Object.assign(window, globals);

  modules = props.modules || modules;
  theme = props.theme || theme;

  init({ modules, theme, options, callback });

  const Tag = props.element || (typeof Provider !== 'undefined') ? Provider : 'div';
  const render = props.render || props.children;

  return (
    <Tag theme={theme}>
      { typeof render === 'function' ? render() : render }
    </Tag>
  );
}