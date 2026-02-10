import { useState } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import { ButtonWithIcon } from "../../../../sharedComponents/ButtonWithIcon";


type Props = {
    showModalBoolean: boolean;
    setShowModalBoolean: (showModal: boolean) => void;
    datos : any;
}


export const ModalRegister = ({showModalBoolean, setShowModalBoolean, datos}: Props) => {
       

       return (
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={showModalBoolean}
            onRequestClose={() => {
                setShowModalBoolean(false);
            }}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Notificación</Text>
                    <Text style={styles.text}>{datos}</Text>
                    <ButtonWithIcon text={"Cerrar"} iconName={"close"} type={"default"} fnDeOtroComponente={() => setShowModalBoolean(false)}
                    />
                </View>
            </View>
        </Modal>
       )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    container: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    }
})