import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import styles from './styles'
import MainProducts from '../../components/MainProducts'
import FavouriteProducts from '../../components/FavouriteProducts'
import { Product } from '../../models'
import Products from '../../../assets/products'
import CategoryFilter from '../../components/CategoryFilter'

const index = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
      setProducts(Products)
  }, [])



  return (
    <ScrollView style={{backgroundColor:"white",height:"100%"}}>
      <CategoryFilter />
      <FavouriteProducts />
      <MainProducts mainProducts={products} key={"mainProducts"} />
    </ScrollView>
  )
}

export default index