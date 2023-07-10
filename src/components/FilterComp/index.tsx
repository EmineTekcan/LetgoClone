import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';

type props={
    categoryTitle:string
}

const FilterComp = ({categoryTitle}:props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.gray} />
    </View>
  )
}

export default FilterComp

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        borderColor:colors.gray,
        borderWidth:1,
        width:80,
        padding:4,
        alignItems:"center",
        justifyContent:"space-around",
        paddingHorizontal:5,
        borderRadius:20,
        margin:10,
    },
    title:{
        fontWeight:"700",
        color:colors.gray
    }
})