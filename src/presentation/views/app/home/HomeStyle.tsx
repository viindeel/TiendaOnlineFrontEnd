import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
      width: 40,
        height: 40
    },

    titleView: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },

    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
    },
    titleProduct: {
        fontWeight: "bold",
        fontSize: 19,
    },
    descProduct: {
        color: "gray",
    },
    actionContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceProducts: {
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonProduct: {
        backgroundColor: "#D8EEE4",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    textButtonProduct: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#0D714D"
    }

});