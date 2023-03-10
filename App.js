import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import MainMenu from './src/index';

export default function Main() {
  return (
    <PaperProvider>
      <MainMenu />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);