import { Dimensions, Image, StatusBar, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { TWStyles } from 'twrn-styles'
import { MainStackScreenProps } from '@/navigations/navigations.type'
import { TWColors } from '@/styles/colors'
import authStore from '@/stores/auth'

const SplashScreen = ({ navigation }: MainStackScreenProps<'SplashScreen'>) => {
  const width = useMemo(() => Dimensions.get('window').width, []);
  const isLoggedIn = authStore(state => state.isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    }, 1000);
  }, [isLoggedIn, navigation]);

  return (
    <View style={[TWStyles.displayFlex, TWStyles.justifyCenter, TWStyles.alignCenter, {backgroundColor: TWColors.PRIMARY}]}>
      <StatusBar barStyle="light-content" backgroundColor={TWColors.PRIMARY} />
      <Image source={require('@/assets/logo.webp')} style={{width: width * 0.8, height: width * 0.5}} resizeMode='contain' />
    </View>
  )
}

export default SplashScreen