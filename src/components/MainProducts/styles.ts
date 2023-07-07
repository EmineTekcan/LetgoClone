import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginLeft: "4%",
        marginTop:15,
    },
    topicTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom:15
    },
    listContainer:{
        flexWrap:"wrap",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        gap:15,
    }
})

export default styles;