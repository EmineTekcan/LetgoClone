import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

type SearchBarProps={
    location:any,
    city:string
}

const SearchBar = ({ location ,city}:SearchBarProps) => {

    const navigate = useNavigation();

    const handleFilterScreen = () => {
        navigate.navigate("FilterScreen")
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Ionicons name="search" size={20} color={"#a1a1a1"} />
                <TextInput
                    style={{ fontSize: 14, fontWeight: "200", color: colors.gray }}
                    placeholder='Araba, telefon, bisiklet ve daha fazlası...'
                    placeholderTextColor={"#949494"}
                    onSubmitEditing={handleFilterScreen}
                />
            </View>
            <Ionicons name="notifications" size={22} color={colors.gray} />
        </View>
    )
}

export default SearchBar
