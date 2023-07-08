import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../conts/constants';
import styles from './styles';

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Ionicons name="search" size={20} color={"#a1a1a1"} />
                <TextInput
                style={{fontSize:14,fontWeight:"200",color:colors.gray}}
                    placeholder='Araba, telefon, bisiklet ve daha fazlası...'
                    placeholderTextColor={"#949494"}
                />
            </View>
            <Ionicons name="notifications" size={22} color={colors.gray} />
        </View>
    )
}

export default index
