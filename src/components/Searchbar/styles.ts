import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../conts/constants";

const {height,width}=Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:"3%",
        gap:15,
        marginBottom:10,
        backgroundColor:"#f2f2f2",
        paddingVertical:"2%"
    },
    inputView: {
        flexDirection: "row",
        alignItems: "center",
        borderColor:colors.gray,
        borderWidth:1.5,
        flex:1,
        paddingHorizontal:width*0.02,
        paddingVertical:width*0.01,
        gap:width*0.04,
        borderRadius:7,
    }
})

export default styles