import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '../../conts/constants';

const SellerComp = () => {
  return (
    <View style={{elevation:1 ,flexDirection: "row", paddingHorizontal: "5%" ,alignItems:'center',justifyContent:"space-between"}}>
      <View style={{flexDirection:"row",alignItems:"center",gap:8}}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25
          }}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PwgVUOtsHAlHyVXdDKox1OBk3T4QpfFpmw&usqp=CAU" }} />
        <Text>Satıcı Adı</Text>
      </View>
      <Feather name="chevron-right" size={24} color={colors.gray} />
    </View>
  )
}

export default SellerComp

const styles = StyleSheet.create({})