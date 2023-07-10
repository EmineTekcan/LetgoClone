import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Product } from '../../models'
import Favourite from '../Favourite'

type mainProductsProps = {
    mainProducts: Product[]
}

const MainProducts = ({mainProducts}:mainProductsProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.topicTitle}>Güncel İlanlar</Text>
            </View>
            <View style={styles.listContainer}>
                {
                    mainProducts.map((item:Product,index)=>(
                        <Favourite item={item} key={index} type='main'  />
                    ))
                }
            </View>
        </View>
    )
}

export default MainProducts
