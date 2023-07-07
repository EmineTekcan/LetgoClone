import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';

type productProps = {
    item: Product,
    type?: string
}

const index = ({ item, type }: productProps) => {
    return (
        <TouchableOpacity style={type == "main" ? styles.mainContainer : styles.container}>
            <View style={type == "main" ? styles.productMainView : styles.productView}>
                <Image
                    resizeMode='stretch'
                    style={type == "main" ? styles.mainImage : styles.image}
                    source={{ uri: item.image }}
                />
                {
                    !type &&
                    <View style={styles.rotateText}>
                        <Text style={{ fontWeight: "600" }}>Öne çıkan</Text>
                    </View>
                }
                <TouchableOpacity style={{ position: "absolute", right: 5, bottom: 2 }} >
                    <AntDesign name="heart" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default index