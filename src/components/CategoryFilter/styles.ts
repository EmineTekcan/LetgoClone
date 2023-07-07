import { Dimensions, StyleSheet } from "react-native";

const {height,width}=Dimensions.get("window")

const styles=StyleSheet.create({
    scrollStyle:{
        height:height*0.15,
        marginBottom:15,
    },
    image:{
        height:50,
        width:50,
        borderRadius:25
    },
    center:{
        alignItems:"center",
        flexDirection:"column",
        paddingHorizontal:10,
        width:width*0.25,
        gap:12
    },
    headTxt:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:"3%",
        marginBottom:"4%"
    }
})

export default styles;