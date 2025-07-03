import { AppRegistry } from 'react-native';
import App from './app.js'; // Mengimpor App dari file app.js
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);