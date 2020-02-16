import { init } from '.';

if (typeof React === 'undefined') {
  var React = require('react');
}

export default ({ globals, modules, theme, utils, options, callback, element, ...props }) => {
  Object.assign(window, globals);

  init({ modules, theme, utils, options, callback });

  const Tag = element || (typeof Provider !== 'undefined') ? Provider : 'div';
  const render = props.render || props.children;

  return (
    <Tag theme={theme} utils={utils} {...props}>
      { typeof render === 'function' ? render({ modules, options, theme, utils }) : render }
    </Tag>
  );
}