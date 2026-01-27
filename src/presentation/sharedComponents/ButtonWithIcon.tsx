import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    text: string;
    fnDeOtroComponente: () => void;
    type?: "default" | "md" | "lg";
    iconName?: any;
}


export const ButtonWithIcon= ({text = "Comprar", fnDeOtroComponente, type = "default", iconName}: Props) => {
    return(
    <TouchableOpacity
        style={[styles.buttonProduct,
            type === "lg" ? {width: "95%" , alignSelf: "center"} : null,
            type === "md" ? {width: "50%" , alignSelf: "center"} : null
        ]}
        onPress={ () => {
            fnDeOtroComponente();
        }}
    >
        <Text style={styles.textButtonProduct}>{text}</Text>
        {(iconName) ? <FontAwesome name={iconName} size={24} color="#0D714D" /> : null}
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    buttonProduct: {
        backgroundColor: "#D8EEE4",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonProduct: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#0D714D",
        textAlign: "center",
        marginRight: 10,
    }
})