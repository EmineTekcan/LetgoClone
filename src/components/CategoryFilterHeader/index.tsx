import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../conts/constants';
import styles from './styles';

type props = {
    location: string,
    product: string
}

const CategoryFilterHeader = ({ location, product }: props) => {
    return (
        <View style={styles.container}>
            <View style={{paddingLeft:8, flexDirection: "row", gap: 5, borderWidth: 1,flex:1,alignItems:"center" ,borderRadius:8,paddingHorizontal:3}}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <TextInput placeholder={`${location} içindeki ${product}`} />
            </View>
            <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                <Feather name="map-pin" size={22} color={colors.gray} />
                <Image 
                style={{width:40,height:50,overlayColor:colors.gray}}
                source={require("../../../assets/filtericon.jpg")}
                 />
            </View>
        </View>
    )
}

export default CategoryFilterHeader
