if (typeof React === 'undefined') {
  var React = require('react');
}

export const UIContext = React.createContext({ theme: {} });

export default (props) => (
  <UIContext.Provider value={{ theme: props.theme }}>
    {props.children}
  </UIContext.Provider>
);