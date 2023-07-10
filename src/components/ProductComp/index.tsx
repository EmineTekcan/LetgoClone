import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';
import { Feather } from '@expo/vector-icons';

type productProps = {
    price: number,
    name: string,
    distance?: number,
    location?: string,
    model?: number
}

const ProductComp = ({ distance, location, name, price, model }: productProps) => {
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={{ uri: "https://cdn.pixabay.com/photo/2017/03/02/06/03/photomanipulation-2110496_1280.jpg" }}
            />
            <View style={styles.iconCon}>
                <Ionicons name="heart-outline" size={20} color={colors.gray} />
            </View>

            <View style={{flexDirection:"column",gap:3,marginTop:10}}>
                <Text style={{fontWeight:"bold",marginVertical:5}}>{`TL ${price}00`}</Text>
                <Text style={{fontSize:12,color:colors.gray}}>{name.length > 30 ? name.substring(0,20)+"...":name}</Text>
                <Text style={{fontSize:13,color:colors.gray}}>{`${model} - ${distance} km`}</Text>
                <View style={{flexDirection:"row",gap:3,alignItems:"center",marginVertical:5}}>
                    <Feather name="map-pin" size={16} color={colors.gray} />
                    <Text style={{color:colors.gray,fontSize:12}}>{`${location}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductComp

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: width * 0.45,
        height: width * 0.7,
        paddingHorizontal:5,
        borderWidth:2,
        borderColor:colors.gray,
        marginVertical:5,
    },
    image: {
        width: "100%",
        height: "50%",
        alignSelf:"center",
        marginTop:10
    },
    iconCon: {
        backgroundColor: "white",
        position: "absolute",
        right: 15,
        top: 10,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30
    }
})