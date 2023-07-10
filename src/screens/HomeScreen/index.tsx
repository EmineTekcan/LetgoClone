import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import styles from './styles'
import MainProducts from '../../components/MainProducts'
import FavouriteProducts from '../../components/FavouriteProducts'
import { Product } from '../../models'
import Products from '../../../assets/products'
import CategoryFilter from '../../components/CategoryFilter'
import Searchbar from '../../components/Searchbar'

const HomeScreen = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
      setProducts(Products)
  }, [])



  return (
    <ScrollView style={{backgroundColor:"white",height:"100%"}}>
      <Searchbar />
      <CategoryFilter />
      <FavouriteProducts />
      <MainProducts mainProducts={products} key={"mainProducts"} />
    </ScrollView>
  )
}

export default HomeScreen