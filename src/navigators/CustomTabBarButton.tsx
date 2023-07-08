import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../conts/constants';

const CustomTabBarButton = () => {
    return (
        <Pressable
            style={{
                backgroundColor: 'white',
                padding: 6,
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOpacity: 0.8,
                shadowOffset: { width: 5, height: 3 },
                shadowRadius: 10,
                elevation: 5,
                marginBottom: 40,
            }}>
            <View
                style={{
                    backgroundColor: colors.mainColor,
                    width: 48,
                    height: 48,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25
                }}>
                <FontAwesome name="camera" size={24} color="white" />
            </View>
        </Pressable>
    )
}

export default CustomTabBarButton

const styles = StyleSheet.create({})