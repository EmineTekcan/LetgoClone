import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import {View} from 'react-native'
import CustomHeader from './CustomHeader';

const Stack = createStackNavigator();


const HomeNavigator = () => {

  return (
    <Stack.Navigator
    screenOptions={{
      header:()=><CustomHeader location='Aksaray' />
    }}
    initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen } />
    </Stack.Navigator>
  )
}

export default HomeNavigator
