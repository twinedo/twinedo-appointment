import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TWStyles } from 'twrn-styles';
import Navigations from '@/navigations';

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaView style={TWStyles.flexGrow}>
          <Navigations />
        </SafeAreaView>
      </NavigationContainer>
  );
}
