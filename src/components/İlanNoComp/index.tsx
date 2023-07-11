import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../conts/constants'

type İlanNoCompProps = {
    ilanNo: number
}

const İlanNoComp = ({ ilanNo }: İlanNoCompProps) => {
    return (
        <View style={{ paddingHorizontal: "5%", paddingVertical: "3%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>İLAN NO: </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{ilanNo}</Text>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 15,color:colors.mainColor }}>İLANI ŞİKAYET ET</Text>
        </View>
    )
}

export default İlanNoComp

const styles = StyleSheet.create({})