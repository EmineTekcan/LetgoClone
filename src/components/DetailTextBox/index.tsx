import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type DetailTextBoxProps = {
    product: Product
}

//<MaterialIcons name="local-fire-department" size={24} color="black" />

const DetailTextBox = ({ product }: DetailTextBoxProps) => {
    return (
        <View style={{ paddingHorizontal: "5%" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>{`₺ ${product.price}`}</Text>
                <Ionicons name="heart-outline" size={24} color={colors.gray} />
            </View>
            <Text style={{ color: colors.gray, marginVertical: "1%" }}>{product.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                    <FontAwesome5 name="map-marker-alt" size={14} color={colors.gray} />
                    <Text style={{ color: colors.gray, fontWeight: "200" }}>{`AKSARAY, AKSARAY`}</Text>
                </View>
                <View>
                    <Text style={{ color: colors.gray, fontWeight: "200" }}>{`BUGÜN`}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailTextBox

const styles = StyleSheet.create({})