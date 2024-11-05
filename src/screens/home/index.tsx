import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import authStore from '@/stores/auth'
import { Button } from 'twrn-components';

const Home = () => {
    const logout = authStore(state => state.logout);
  return (
    <View>
      <Text>Home</Text>
        <Button onPress={logout}>Logout</Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})