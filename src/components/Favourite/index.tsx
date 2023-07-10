import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


type productProps = {
    item: Product,
    type?: string
}

const Favourite = ({ item, type }: productProps) => {

    const navigation = useNavigation();

    const handleProductDetailNavigate = () => {
        navigation.navigate("ProductDetail", { product: item })
    }

    return (
        <Pressable
            onPress={handleProductDetailNavigate}
            style={type == "main" ? styles.mainContainer : styles.container}>
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
        </Pressable>
    )
}

export default Favourite