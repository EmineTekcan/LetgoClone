import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const { height, width } = Dimensions.get("window")

const Mapping = ({ location }: any) => {

  console.log("hello location" + location.coords.accuracy)

  return (
    <View style={{ paddingHorizontal: "5%", paddingVertical: "4%" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16
        }}
      >İlan konumu</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          height: height * 0.2,
          borderRadius: 12,
          marginVertical: "3%"
        }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default Mapping

const styles = StyleSheet.create({})