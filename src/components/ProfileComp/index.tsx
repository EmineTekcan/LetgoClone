import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

type ProfileCompProps = {
    icon: any,
    title: string,
    description: string,
    func: () => void
}

const { height, width } = Dimensions.get("window")

const ProfileComp = ({ description, func, icon, title }: ProfileCompProps) => {

    return (
        <View style={{ flexDirection: "row", gap: 10,paddingVertical:"3%",paddingHorizontal:"5%"}}>
            <View>
                {icon}
            </View>
            <View style={{ flexDirection: "row", width:"90%",alignItems:"center",justifyContent:"space-between"}}>
                <View style={{margin:4,flex:1}}>
                    <Text style={{fontSize:15,marginBottom:4,color:"#282828"}}>{title}</Text>
                    <Text style={{color:"#969696"}}>{description}</Text>
                </View>
                <View>
                    <AntDesign name="right" size={18} color="#9F9F9F" />
                </View>
            </View>
        </View>
    )
}

export default ProfileComp

const styles = StyleSheet.create({})