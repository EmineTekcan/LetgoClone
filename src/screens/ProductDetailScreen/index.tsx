import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { Product } from '../../models'
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageCarousel from '../../components/ImageCarousel'


const ProductDetailScreen = () => {

  const route = useRoute();
  const { product } = route.params

  return (
    <View style={{ flex: 1 }}>

      {/* Header section */}
      <CustomHeader />
      <ScrollView style={{ zIndex: -1 }}>
        <ImageCarousel images={product.images} />
      </ScrollView>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})