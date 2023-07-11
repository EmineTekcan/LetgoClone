import { StyleSheet, Text, View, Pressable,Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';
import { Foundation } from '@expo/vector-icons';

type CustomButtonProps = {
    title: string,
    func: () => void
}

const {height,width}=Dimensions.get("window")

const CustomButton = ({ func, title }: CustomButtonProps) => {
    return (
        <Pressable
        style={{
            backgroundColor:colors.mainColor,
            width:width*0.45,
            height:45,
            borderRadius:35,
            flexDirection:"row",
            justifyContent:"center",
            gap:10,
            alignItems:"center"
        }}
        >
            {
                title === "Sohbet" ?
                    <Ionicons name="md-chatbox-ellipses" style={{paddingTop:5}} size={26} color={"white"} /> :
                    <Ionicons name="ios-call-outline" style={{paddingTop:2}} size={28} color="white" />
            }
            <Text
            style={{
                fontWeight:"bold",
                color:"white",
                fontSize:16,
                textAlign:"center",
            }}
            >{title}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({})