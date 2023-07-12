import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import React, { useEffect } from 'react'
import { colors } from '../conts/constants';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBarButton from './CustomTabBarButton';
import IlanlarimNavigator from './IlanlarimNavigator'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import SohbetTopBar from './SohbetTopBar';
import MessageStackNavigator from './MessageStackNavigator';
import CustomHeader from './CustomHeader';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const RootNavigator = ({ }) => {

    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                tabBarStyle: {
                    height: 60
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.mainColor,
                tabBarInactiveTintColor: "#959595",
                tabBarLabelStyle: {
                    marginBottom: 6
                }
            }}
        >
            <Tab.Screen
                key={"Ana Sayfa"}
                name='Ana Sayfa'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <MaterialIcons name="home-filled" size={24} color={colors.mainColor} /> :
                            <MaterialIcons name="home-filled" size={24} color="#979797" />
                    ),

                }}
            />
            <Tab.Screen
                key={"Sohbetler"}
                name='Sohbetler'
                component={MessageStackNavigator}
                options={{
                    headerShown: true,
                    header: () => <CustomHeader />,
                    headerStyle: {
                        backgroundColor: "#F5F5F5"
                    },
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <Ionicons name="ios-chatbox-ellipses" size={24} color={colors.mainColor} /> :
                            <Ionicons name="ios-chatbox-ellipses" size={24} color="#979797" />
                    )
                }}
            />
            <Tab.Screen
                key={"Sat"}
                name='Sat'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (<CustomTabBarButton />)
                }}
            />
            <Tab.Screen
                key={"Ilanlarim"}
                name='ILanlarim'
                component={IlanlarimNavigator}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        focused ? <Ionicons name="heart-sharp" size={24} color={colors.mainColor} /> :
                            <Ionicons name="heart-sharp" size={24} color="#979797" />
                    )
                }}
            />
            <Tab.Screen
                key={"Hesap"}
                name='Hesap'
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    header: () => <CustomHeader />,
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
