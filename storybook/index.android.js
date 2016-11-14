import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@kadira/react-native-storybook';
import './addons';

configure(function() {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost'});
AppRegistry.registerComponent('Messenger', () => StorybookUI);
