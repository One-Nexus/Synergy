import { UIContext } from '../components/provider';
import evalTheme from '../utilities/evalTheme';

export default () => {
  const { theme } = React.useContext(UIContext);

  return evalTheme(theme);
}