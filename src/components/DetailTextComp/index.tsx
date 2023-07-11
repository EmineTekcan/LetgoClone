import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../conts/constants'

type DetailTextCompProps = {
    title: string,
    desc?: [{
        name: string,
        value: string
    }],
    description?: string
}

const DetailTextComp = ({ desc, title, description }: DetailTextCompProps) => {
    return (
        <View style={{
            paddingHorizontal: "5%",
            paddingVertical: "2%",
            marginVertical: "4%",
        }}>
            <Text style={{ marginVertical: "2%",fontWeight:"bold",fontSize:16}}>{title}</Text>
            <Text style={{ fontSize: 13, color: colors.gray }}>{description}</Text>
        </View>
    )
}

export default DetailTextComp

const styles = StyleSheet.create({})