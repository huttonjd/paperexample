# React Native PaperExample
Example using [React Native Paper](https://callstack.github.io/react-native-paper/index.html)

# Step to create this
- open Administrator nodejs command promopt
- cd < parent location to store code >
## Create App 
- npx create-expo-app paperexample
- cd paperexample

## Add modules needed
- yarn add react@18.1.0
- yarn add react-navigation
- yarn add @react-navigation/drawer
- yarn add @react-navigation/stack
- yarn add @react-navigation/elements
- yarn add react-navigation/native
- yarn add react-native@0.70.5 
- yarn add react-native-reanimated@~2.12.0
- yarn add react-native-async-storage/async-storage
- yarn add react-native-gesture-handler
- yarn add react-native-paper
- yarn add react-native-safe-area-context
- yarn add react-native-vector-icons
- yarn add chalk
- yarn add expo-updates
- yarn add typescript@^4.6.3 @types/react@~18.0.24 @types/react-native@~0.70.6
- yarn add yarn-upgrade-all
- npx expo install react@18.1.0 react-native@0.70.5 react-native-reanimated@~2.12.0
  
## Update .\App.js 
- open .\App.js
- Replace it with following and save
```javascript
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import MainApp from './src/index';



export default function Main() {
  return (
    <PaperProvider>
      <MainApp />
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
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', pak.source),
          },
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
```


# To run
npm start