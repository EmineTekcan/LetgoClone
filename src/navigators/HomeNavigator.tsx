import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import React, { useEffect, useLayoutEffect,useState } from 'react'
import { View, Text } from 'react-native'
import CustomHeader from './CustomHeader';
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const Stack = createStackNavigator();


const HomeNavigator = ({ navigation, route }) => {

  const tabHiddenRoutes = ["ProductDetail"];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({
        tabBarStyle: {
          display: "none"
        }
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 60
        },
      });
    }
  }, [navigation, route]);

  const [location, setLocation] = useState<Location.LocationObject>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [city, setCity] = useState("")

  useLayoutEffect(() => {
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
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader location={city} />
      }}
      initialRouteName='Home'>
      <Stack.Screen key={"Home"} name='Home' component={HomeScreen} />
      <Stack.Screen
        key={"FilterScreen"}
        options={{
          header: () => <CustomHeader />
        }}
        name='FilterScreen'
        component={CategoryFilterScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}

        name='ProductDetail'
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
