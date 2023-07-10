import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import İlanlarim from '../İlanlarim'
import Favoriler from '../Favoriler'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../../conts/constants';

const Tab = createMaterialTopTabNavigator();

const IlanlarimScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          borderBottomColor: colors.mainColor,
          borderBottomWidth: 4,
        }
      }}
    >
      <Tab.Screen name="İlanlarım" component={İlanlarim} />
      <Tab.Screen name="Favoriler" component={Favoriler} />
    </Tab.Navigator>
  )
}

export default IlanlarimScreen

const styles = StyleSheet.create({})