/*
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
*/




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: true }}>
        <Tab.Screen 
          name=" " 
          component={Page1} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/home.png')} />
            ),
          }}
        />
       
       <Tab.Screen 
          name="  " 
          component={Page3} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/myCards.png')} />
            ),
          }}
        />
        
        <Tab.Screen 
          name="   " 
          component={Page4} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./assets/statictics.png')} />
            ),
          }}
        />

        <Tab.Screen 
          name="    " 
          component={Page2} 
          options={{
            tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/settings.png')} /> 
          ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
