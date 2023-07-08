import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import React from 'react'
import { colors } from '../conts/constants';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBarButton from './CustomTabBarButton';

const Tab = createBottomTabNavigator();

const RootNavigator = ({ }) => {
    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                tabBarStyle:{
                    height: 60
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.mainColor,
                tabBarInactiveTintColor: "#959595",
                tabBarLabelStyle:{
                    marginBottom:6
                }
            }}
        >
            <Tab.Screen
                name='Ana Sayfa'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <MaterialIcons name="home-filled" size={24} color={colors.mainColor} /> :
                            <MaterialIcons name="home-filled" size={24} color="#979797" />
                    )
                }}
            />
            <Tab.Screen
                name='Sohbetler'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <Ionicons name="ios-chatbox-ellipses" size={24} color={colors.mainColor} /> :
                            <Ionicons name="ios-chatbox-ellipses" size={24} color="#979797" />
                    )
                }}
            />
            <Tab.Screen
                name='Sat'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (<CustomTabBarButton />)
                }}
            />
            <Tab.Screen
                name='İlanlarım'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <Ionicons name="heart-sharp" size={24} color={colors.mainColor} /> :
                            <Ionicons name="heart-sharp" size={24} color="#979797" />
                    )
                }}
            />
            <Tab.Screen
                name='Hesap'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <Ionicons name="person" size={24} color={colors.mainColor} /> :
                            <Ionicons name="person" size={24} color="#979797" />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default RootNavigator
