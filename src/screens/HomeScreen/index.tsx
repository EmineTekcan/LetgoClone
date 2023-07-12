import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import styles from './styles'
import MainProducts from '../../components/MainProducts'
import FavouriteProducts from '../../components/FavouriteProducts'
import { Product } from '../../models'
import Products from '../../../assets/products'
import CategoryFilter from '../../components/CategoryFilter'
import Searchbar from '../../components/Searchbar'
import * as Location from 'expo-location';

const HomeScreen = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [location, setLocation] = useState<Location.LocationObject>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [city, setCity] = useState("")

  useEffect(() => {
    setProducts(Products)
  }, [])

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log(status)
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode.length > 0) {
        let address = geocode[0]?.region;
        console.log('Bulunduğu Yer:', address);
        setCity(address)
      }
    })();

    console.log(location)
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <Searchbar city={city} location={location} />
      <CategoryFilter />
      <MainProducts city={city} location={location} mainProducts={products} key={"mainProducts"} />
    </ScrollView>
  )
}

export default HomeScreen