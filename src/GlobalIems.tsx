import React from 'react';
import { MD2Theme, MD3Theme, useTheme } from 'react-native-paper';

export const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();

export const PreferencesContext = React.createContext<any>(null);