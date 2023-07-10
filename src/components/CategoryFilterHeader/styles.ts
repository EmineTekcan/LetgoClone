import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "white",
        paddingHorizontal: 10
    },
    rightContain: {
        paddingLeft: 8,
        flexDirection: "row",
        gap: 5,
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 3
    },
    leftContain: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    }
})

export default styles;