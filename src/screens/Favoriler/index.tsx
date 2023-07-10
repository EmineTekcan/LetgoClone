import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Product } from '../../models'
import products from '../../../assets/products'
import { FlatList } from 'react-native-gesture-handler'
import FavoriProduct from '../../components/FavoriProduct'

const Favoriler = () => {

  const [favoriProducts, setFavoriProducts] = useState<Product[]>([])

  useEffect(() => {
    setFavoriProducts(products)
  }, [])

  return (
    <View style={{backgroundColor:"white"}}>
      <FlatList
        data={favoriProducts}
        renderItem={({ item, index }) => <FavoriProduct product={item} />}
      />
    </View>
  )
}

export default Favoriler

const styles = StyleSheet.create({})