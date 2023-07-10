import { Text, View, Image } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';


type favoriProductProps = {
    product: Product
}

const FavoriProduct = ({ product }: favoriProductProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.midContainer}>
                <View style={styles.top}>
                    <Image
                        style={styles.image}
                        source={{ uri: product.image }} />
                    <View>
                        <Text style={{ fontWeight: "600",fontSize:16 }}>{`₺ ${product.price}`}</Text>
                        <Text style={{color:colors.gray}}>{product.description}</Text>
                    </View>
                    <Ionicons style={{position:"absolute",right:-100}} name="ios-trash-sharp" size={24} color={colors.gray} />
                </View>
                <View style={{ borderBottomWidth: 0.2, borderColor: colors.gray, marginHorizontal: 5, marginVertical: "2%" }} />
                <View style={{justifyContent:"center",flex:1}}>
                    <Text style={{color:colors.mainColor,fontSize:13, alignSelf:"center"}}>Daha fazla bilgi</Text>
                </View>
            </View>
        </View>
    )
}

export default FavoriProduct
