import {AppRegistry} from 'react-native';
import Main from './src/Main';

import {enableScreens} from 'react-native-screens';
enableScreens(false);

AppRegistry.registerComponent('main', () => Main);
