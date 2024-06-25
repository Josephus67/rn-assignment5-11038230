



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Page1 from './Page1';
import Page2 from './Page2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name=" " component={Page1} />

        <Tab.Screen name="  " component={Page2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
