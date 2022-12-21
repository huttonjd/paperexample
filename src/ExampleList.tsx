import * as React from 'react';
import { FlatList } from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';
import { Divider, List } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// get screen items
import FlatListImagesScreen from './Examples/FlatListImages';
import MaterialBottomTabsScreen from './Examples/MaterialBottomTabs';
import BottomNavigationExampleScreen from './Examples/BottomNavigationExample';

import { useExampleTheme } from '.';

//build up record
export const mainExamples: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  flatListImages: FlatListImagesScreen,
  bottomNavigationExample: BottomNavigationExampleScreen,
  
};

export const examples: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  ...mainExamples,
};

type Props = {
  navigation: StackNavigationProp<{ [key: string]: undefined }>;
};

type Item = {
  id: string;
  data: typeof mainExamples[string];
};

const data = Object.keys(mainExamples).map(
  (id): Item => ({ id, data: mainExamples[id] })
);

export default function ExampleList({ navigation }: Props) {
  const keyExtractor = (item: { id: string }) => item.id;

  const { colors, isV3 } = useExampleTheme();
  const safeArea = useSafeAreaInsets();

  const renderItem = ({ item }: { item: Item }) => {
    const { data, id } = item;

    if (!isV3 && data.title === mainExamples.themingWithReactNavigation.title) {
      return null;
    }

    return (
      <List.Item title={data.title} onPress={() => navigation.navigate(id)} />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: colors.background,
        paddingBottom: safeArea.bottom,
        paddingLeft: safeArea.left,
        paddingRight: safeArea.right,
      }}
      style={{
        backgroundColor: colors.background,
      }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={data}
    />
  );
}
