import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { colors } from '../../conts/constants';

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        height: height * 0.25,
        margin: "3%",
        width: "94%"
    },
    midContainer: {
        height: height * 0.25,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        padding: "2%",
    },
    top: {
        flexDirection: "row",
        gap: 10,
        width: "70%",
        height: "60%",
        marginTop:10,
    },
    image: {
        width: width*0.20,
        height: width*0.20,
        borderRadius:10
    }
})

export default styles;