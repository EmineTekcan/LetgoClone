import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const CustomHeader = () => {
    return (
        <View
        >
            <LinearGradient
                colors={['black', 'rgba(255, 255, 255, 0.8)']}
                style={styles.contentContainer}
            >
                <View>
                    <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
                </View>
                <View style={styles.right}>
                    <Ionicons name="ios-share-social-sharp" size={24} color="white" />
                    <SimpleLineIcons name="heart" size={24} color="white" />
                </View>
            </LinearGradient>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: Dimensions.get("window").height * 0.05,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:"3%",
        paddingBottom:20,
        backgroundColor: 'transparent',
        position:"absolute",
        top:0,
        left:0,
        width:Dimensions.get("window").width,
    },
    right:{
        flexDirection:"row",
        gap:20
    }
})