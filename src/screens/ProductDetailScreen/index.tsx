import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { Product } from '../../models'
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageCarousel from '../../components/ImageCarousel'
import DetailTextBox from '../../components/DetailTextBox'
import DetailTextComp from '../../components/DetailTextComp'
import SellerComp from '../../components/SellerComp'
import { colors } from '../../conts/constants'
import Mapping from '../../components/Mapping'

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
      </ScrollView>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})