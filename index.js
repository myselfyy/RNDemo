/** @format */

import {AppRegistry} from 'react-native';
import App from './Pages/App';
import {name as appName} from './app.json';
import "./src/Common/config";

AppRegistry.registerComponent(appName, () => App);
