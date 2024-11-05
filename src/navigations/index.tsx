import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavParam} from './navigations.type';
import {Home, Login, SplashScreen} from '@/screens';
import authStore from '@/stores/auth';

const Stack = createNativeStackNavigator<NavParam>();
const Navigations = () => {
  const isLoggedIn = authStore(state => state.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {!isLoggedIn && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
        {isLoggedIn && (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </>
  );
};

export default Navigations;
