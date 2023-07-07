import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import categoriesData from '../../../assets/categories'
import styles from './styles'
import { Category } from '../../models'
import { colors } from '../../conts/constants'

const index = () => {

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    setCategories(categoriesData)
    return () => {
      setCategories([])
    }
  }, [categoriesData])

  return (
    <View>
      <View style={styles.headTxt}>
        <Text style={{ color: "#767575" }}>Kategorilere göz at</Text>
        <Text style={{color:colors.mainColor, fontWeight:"bold",borderBottomWidth:2,borderBottomColor:colors.mainColor}}>Tümünü gör</Text>
      </View>
      <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollStyle}
      >
        {
          categories?.map((item, index) => (
            <TouchableOpacity style={styles.center} key={index}>
              <Image style={styles.image} source={item?.src} />
              <Text style={{ color: "#767575" }}>{item.name}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default index
