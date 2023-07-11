import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import React, { useEffect, useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import CustomHeader from './CustomHeader';
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();


const HomeNavigator = ({ navigation, route }) => {

  const tabHiddenRoutes = ["ProductDetail"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({
        tabBarStyle: {
          display: "none"
        }
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 60
      },
      });
    }
  }, [navigation, route]);

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
      <Stack.Screen
        options={{
          headerShown: false,
        }}

        name='ProductDetail'
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
