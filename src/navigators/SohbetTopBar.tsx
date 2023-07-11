import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../conts/constants';
import MessageScreen from '../screens/MessageScreen'
import {Text} from 'react-native'

const Tab = createMaterialTopTabNavigator();

const SohbetTopBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    borderBottomColor: colors.mainColor,
                    borderBottomWidth: 4,
                },
                tabBarStyle:{
                    backgroundColor:"#F8F8F8"
                },
                tabBarLabelStyle:{
                    fontSize:11,
                }
            }}
        >
            <Tab.Screen
            options={{
                tabBarLabel:({color})=>(<Text style={{fontSize:13,color:color}}>Hepsi</Text>)
            }}
            name="Hepsi" component={MessageScreen } />
            <Tab.Screen
             options={{
                tabBarLabel:({color})=>(<Text style={{fontSize:13,color:color}}>Alım</Text>)
            }}
            name="Alım" component={ MessageScreen} />
            <Tab.Screen
             options={{
                tabBarLabel:({color})=>(<Text style={{fontSize:13,color:color}}>Satım</Text>)
            }}
            name="Satım" component={MessageScreen } />
        </Tab.Navigator>
    )
}

export default SohbetTopBar
