import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CategoryFilterHeader from '../../components/CategoryFilterHeader'
import FilterComp from '../../components/FilterComp'
import { colors } from '../../conts/constants'
import ProductComp from '../../components/ProductComp'

const CategoryFilterScreen = () => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }} >

            {/* Header Section */}
            <View style={{ elevation: 5, backgroundColor: "white" }}>
                <View>
                    <CategoryFilterHeader location='Aksaray' product='Araba' />
                </View>
                <View style={{ backgroundColor: "white" }}>
                    <FilterComp categoryTitle='Fiyat' key={"fiyat"} />
                    <Text style={{position:"absolute",right:10,top:10, borderBottomWidth:2,borderBottomColor:colors.mainColor,color:colors.mainColor}}>+ Daha fazla</Text>
                </View>
            </View>

            <ScrollView>
                <Text style={{alignSelf:"center",marginVertical:20}}>1.275 ilan bulundu</Text>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
                    {
                        [1, 1, 1, 1, 1,1].map((item,index) => <ProductComp
                        price={182.500}
                         name='TOFAS SAHİN 1998 BENZİN/LPG OTOMOBİL'
                         distance={159.999}
                         key={index}
                         location='AKSARAY, TÜRKİYE'
                         model={1999}
                         />)
                    }
                </View>
            </ScrollView>

        </View>
    )
}

export default CategoryFilterScreen

const styles = StyleSheet.create({})