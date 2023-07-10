import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import React from 'react'
import { View } from 'react-native'
import CustomHeader from './CustomHeader';
import CategoryFilterScreen from '../screens/CategoryFilterScreen'

const Stack = createStackNavigator();


const HomeNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader location='Aksaray' />
      }}
      initialRouteName='Home'>
      <Stack.Screen key={"Home"} name='Home' component={HomeScreen} />
      <Stack.Screen
        key={"FilterScreen"}
        options={{
          header: () => <CustomHeader />
        }}
        name='FilterScreen'
        component={CategoryFilterScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
