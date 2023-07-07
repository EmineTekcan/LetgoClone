import { StyleSheet } from "react-native";
import { colors } from "../../conts/constants";

const styles = StyleSheet.create({
    productContainer: {
        marginLeft: "4%"
    },
    vitrinIlanlar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:12
    },
    topicTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    detailTitle: {
        color: colors.mainColor,
        fontWeight: "bold",
        fontSize: 14
    }
})

export default styles