import { StyleSheet, Text, View, Pressable, Button, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './styles'
import { Product } from '../../models'
import Favourite from '../Favourite'

type mainProductsProps = {
    mainProducts: Product[],
    location: any,
    city:string
}

const MainProducts = ({ mainProducts, location,city }: mainProductsProps) => {


    return (
        <View
            style={styles.container}>
            <View>
                <Text style={styles.topicTitle}>Güncel İlanlar</Text>
            </View>
            <View style={styles.listContainer}>
                {
                    mainProducts.map((item: Product, index) => (
                        <Favourite city={city} location={location} item={item} key={index} type='main' />
                    ))
                }
            </View>
        </View>
    )
}

export default MainProducts
