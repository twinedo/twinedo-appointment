import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavParam } from './navigations.type';
import { Login, SplashScreen } from '@/screens';

const Stack = createNativeStackNavigator<NavParam>();
const Navigations = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Navigations