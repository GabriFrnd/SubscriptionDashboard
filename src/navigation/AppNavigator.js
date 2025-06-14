import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Lista from '../screens/Lista';
import AdicionarAssinatura from '../screens/AdicionarAssinatura';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Adicionar') {
          iconName = 'pencil';
        } else if (route.name === 'Lista') {
          iconName = 'book-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Adicionar" component={AdicionarAssinatura} />
      <Tabs.Screen name="Lista" component={Lista} />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
