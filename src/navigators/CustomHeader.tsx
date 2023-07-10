import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../conts/constants';

type customHeaderProps = {
    location?: string,
    ilanlarim?: true
}


const { width, height } = Dimensions.get("window")

const CustomHeader = ({ location, ilanlarim }: customHeaderProps) => {


    return (
        <View>
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
                    style={{ width: 60, height: 30 }}
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
            {
                ilanlarim && <Text
                style={{
                    backgroundColor:"white",
                    paddingHorizontal: "5%",
                    fontSize:13,
                    color:"#4A4A4A",
                    fontWeight:"200",
                    height:50
                }}
                >İlanlarım</Text>
            }
        </View>
    )
}

export default CustomHeader
