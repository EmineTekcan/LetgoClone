import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import CustomHeader from '../../components/CustomHeader'
import { Product } from '../../models'
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageCarousel from '../../components/ImageCarousel'
import DetailTextBox from '../../components/DetailTextBox'
import DetailTextComp from '../../components/DetailTextComp'
import SellerComp from '../../components/SellerComp'
import { colors } from '../../conts/constants'
import Mapping from '../../components/Mapping'
import İlanNoComp from '../../components/İlanNoComp'
import CustomButton from '../../components/CustomButton'

const { height, width } = Dimensions.get("window")

const ProductDetailScreen = () => {

  const route = useRoute();
  const { product } = route.params


  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      {/* Header section */}
      <CustomHeader />
      <ScrollView style={{ zIndex: -1 }}>
        <ImageCarousel images={product.images} />
        <DetailTextBox product={product} />
        <DetailTextComp title='Açıklama' description={product.description} />
        <SellerComp />
        <Mapping />
        <İlanNoComp ilanNo={1656761757} />
      </ScrollView>
      <View
        style={{
          height: height * 0.08,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",

        }}>
        <CustomButton title='Sohbet' func={() => { }} />
        <CustomButton title='Ara' func={() => { }} />
      </View>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})