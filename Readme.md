# React Native PaperExample
Example using [React Native Paper](https://callstack.github.io/react-native-paper/index.html)

# Step to create this
- open Administrator __nodejs__ command promopt
- cd < parent location to store code >
## Create App 
- npx create-expo-app paperexample
- cd paperexample

## Add Modules needed to run
```Shell
yarn add @expo/vector-icons
yarn add @react-native-community/masked-view
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/drawer
yarn add @react-navigation/elements
yarn add @react-navigation/material-bottom-tabs
yarn add @react-navigation/material-top-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/stack
yarn add expo
yarn add expo-status-bar
yarn add react
yarn add react-native
yarn add react-native-gesture-handler
yarn add react-native-pager-view
yarn add react-native-paper
yarn add react-native-reanimated
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add react-native-tab-view
```
## Update .\App.js 
- open .\App.js
- Replace it with following and save
```javascript
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/index';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```

## update bable.config.js
- open .\bable.config.js
- - replace it with the following and save
```javascript
const path = require('path');

const pak = require('./package.json');

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```


# To run
npm start
or
expo start -c