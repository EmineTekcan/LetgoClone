import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import React from 'react'
import { colors } from '../conts/constants';

const Tab = createBottomTabNavigator();

const RootNavigator = ({ }) => {
    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                headerShown:false,
                tabBarHideOnKeyboard:true,
                tabBarActiveTintColor:colors.mainColor,
                tabBarInactiveTintColor:"#959595"
            }}
        >
            <Tab.Screen name='Ana Sayfa' component={HomeNavigator} />
        </Tab.Navigator>
    )
}

export default RootNavigator
