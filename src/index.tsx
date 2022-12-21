import React, { useState } from 'react';
import { Divider, List } from 'react-native-paper';   
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CardStyleInterpolators,  createStackNavigator,} from '@react-navigation/stack';
import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
  MD2DarkTheme,
  MD2LightTheme,
  MD2Theme,
  MD3Theme,
  useTheme,
  adaptNavigationTheme,
  configureFonts,
} from 'react-native-paper';

import FlatListImagesScreen from './Examples/FlatListImages';
import MaterialBottomTabsScreen from './Examples/MaterialBottomTabs';
import BottomNavigationExampleScreen from './Examples/BottomNavigationExample';

import DrawerItems from './DrawerItems';

export const PreferencesContext = React.createContext<any>(null);
export const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();

const DrawerContent = () => {
  return (
    <PreferencesContext.Consumer>
      {(preferences) => (
        <DrawerItems
          toggleTheme={preferences.toggleTheme}
          toggleRTL={preferences.toggleRtl}
          toggleThemeVersion={preferences.toggleThemeVersion}
          toggleCollapsed={preferences.toggleCollapsed}
          toggleCustomFont={preferences.toggleCustomFont}
          customFontLoaded={preferences.customFontLoaded}
          collapsed={preferences.collapsed}
          isRTL={preferences.rtl}
          isDarkTheme={preferences.theme.dark}
        />
      )}
    </PreferencesContext.Consumer>
  );
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const data = [
  { id: '1', title: 'Flatlist Images', url:'./Examples/FlatListImages', name: 'FlatlistImages', navigateTo: FlatListImagesScreen },
  { id: '2', title: 'Material Bottom Tabs', url:'./Examples/MaterialBottomTabs', name:'MaterialBottomTabs', navigateTo: MaterialBottomTabsScreen },
  ];

const FlatListImagesStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="FlatlistImages"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="FlatlistImages"
          component={FlatListImagesScreen}
        />
      </Stack.Navigator>
  );
}

const MaterialBottomTabsStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="MaterialBottomTabs"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="MaterialBottomTabs"
          component={MaterialBottomTabsScreen}
        />
      </Stack.Navigator>
  );
}


const BottomNavigationExampleStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="BottomNavigationExampleScreen"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="BottomNavigationExampleScreen"
          component={BottomNavigationExampleScreen}
        />
      </Stack.Navigator>
  );
}

const cardStyleInterpolator = Platform.OS === 'android' ? CardStyleInterpolators.forFadeFromBottomAndroid : CardStyleInterpolators.forHorizontalIOS;
   
function MainMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="FlatlistImages"
          options={{
            drawerLabel: 'Flatlist Images',
            title: 'Flatlist Images'
          }}
          component={FlatListImagesStack} />
        <Drawer.Screen
          name="MaterialBottomTabs"
          options={{
            drawerLabel: 'Material Bottom Tabs',
            title: 'Material Bottom Tabs'
          }}
          component={MaterialBottomTabsStack} />
          <Drawer.Screen
          name="BottomNavigationExample"
          options={{
            drawerLabel: 'Bottom Navigation',
            title: 'Bottom Navigation'
          }}
          component={BottomNavigationExampleStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainMenu;
