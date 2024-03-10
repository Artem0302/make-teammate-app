/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from '@app/app';
import {name as appName} from './app.json';

// eslint-disable-next-line react/prop-types
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return null;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
