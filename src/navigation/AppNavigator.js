import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Lista from '../screens/Lista';
import AdicionarAssinatura from '../screens/AdicionarAssinatura';
import EditarAssinatura from '../screens/EditarAssinatura';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} options={{ title: 'Assinaturas' }} />
      <Stack.Screen name="Editar" component={EditarAssinatura} options={{ title: 'Editar Assinatura' }} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Adicionar') {
            iconName = 'pencil';
          } else if (route.name === 'Assinaturas') {
            iconName = 'book-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Assinaturas" component={ListaStack} />
      <Tab.Screen name="Adicionar" component={AdicionarAssinatura} />
    </Tab.Navigator>
  );
};

export default AppNavigator;