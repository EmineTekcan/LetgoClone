import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: width * 0.28
    },
    productView: {
        width: width * 0.26,
        height: width * 0.26
    },
    image: {
        width: width * 0.26,
        height: width * 0.26,
        borderRadius: 10
    },
    rotateText: {
        position: "absolute",
        backgroundColor: "white",
        transform: [{ rotate: "45deg" }],
        top: 18, right: -35,
        paddingHorizontal: 15,
        paddingVertical: 2,
        width: 120,
        alignItems: "center"
    },
    ////main product

    mainContainer:{
        width:width*0.44,
    },
    mainImage: {
        width: width * 0.43,
        height: width * 0.43,
        borderRadius: 12,

    },
    productMainView: {
        width: width * 0.43,
        height: width * 0.43,
    },

})

export default styles;