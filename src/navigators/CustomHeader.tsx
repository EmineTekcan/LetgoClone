import { StyleSheet, Text, View, Dimensions ,Image} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../conts/constants';

type customHeaderProps = {
    location?: string
}


const { width, height } = Dimensions.get("window")

const CustomHeader = ({ location }: customHeaderProps) => {


    return (
        <View
            style={{
                height: height * 0.1,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: "3%",
                backgroundColor: "white",
                paddingTop: 20
            }}>
            <Image 
            style={{width:60, height:30}}
            source={require("../../assets/letgoicon.png")} />
            {
                location && (
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 6,
                            alignItems: "center"
                        }}
                    >
                        <Feather name="map-pin" size={18} color="black" />
                        <Text
                            style={{
                                color: colors.gray
                            }}
                        >{location}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default CustomHeader
