import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home.js'
import Lista from '../screens/Lista.js'
import EditarAssinatura from '../screens/EditarAssinatura.js';
import AdicionarAssinatura from '../screens/AdicionarAssinatura.js'

import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} options={{ title: 'Assinaturas' }} />
      <Stack.Screen name="Editar" component={EditarAssinatura} options={{ title: 'Editar Assinatura' }} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} 
                options={{tabBarIcon: ({color, size}) => (<Ionicons name='home-outline' size={size} color={color}/>)}}
            />
            <Tabs.Screen name="Adicionar" component={AdicionarAssinatura}
                options={{tabBarIcon: ({color, size}) => (<Ionicons name='pencil' size={size} color={color}/>)}}
            />
            <Tabs.Screen name="AssinaturasList" component={ListaStack}
                options={{ title: 'Lista', headerShown: false, tabBarIcon: ({color, size}) => (<Ionicons name='book-outline' size={size} color={color}/>)}}
            />
        </Tabs.Navigator>
    )
}

export default AppNavigator;
