import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import { Product } from '../../models';
import Products from '../../../assets/products';
import { colors } from '../../conts/constants';
import Favourite from '../Favourite'

const FavouriteProducts = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        setProducts(Products)
    }, [])

    return (
        <View  style={styles.productContainer}>
            {/* Vitrin Ilanlar */}
            <View style={styles.vitrinIlanlar}>
                <Text style={styles.topicTitle}>Vitrin İlanlar</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.detailTitle}>Hepsini gör</Text>
                    <Feather name="chevron-right" size={24} color={colors.mainColor} />
                </View>
            </View>

            {/*ScrollView Vitrin Ilanlar */}
            <ScrollView
                bounces={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    products.map((item: Product, index) => <Favourite key={index} item={item} />)
                }
            </ScrollView>
        </View>
    )
}

export default FavouriteProducts
