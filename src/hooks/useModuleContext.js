import ModuleContext from '../context';

export default () => {
  const { context } = React.useContext(ModuleContext);

  return context;
}