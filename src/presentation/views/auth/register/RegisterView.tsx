import {TextInput, View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import {styles} from "./RegisterStyle";
import viewModel from "./RegisterViewModel"
import { ModalRegister } from "./Components/ModalRegister";
import React, { useState } from "react";
import { ButtonWithIcon } from "../../../sharedComponents/ButtonWithIcon";


const RegisterView = () => {

    const {email, password, password2, firstName, lastName, username, setEmail, setPassword, setPassword2, setFirstName, setLastName, setUsername, registrar} = viewModel();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [datos, setDatos] = useState<string>("");


    return (
        <>
            <View>
                <Text style={styles.label}>Nombre</Text>
                <TextInput style={styles.textInput}
                        placeholder="Ingrese su nombre"
                        onChangeText={(text: string) => setFirstName(text)}
                ></TextInput>

                <Text style={styles.label}>Apellido</Text>
                <TextInput style={styles.textInput}
                        placeholder="Ingrese su apellido"
                        onChangeText={(text: string) => setLastName(text)}
                ></TextInput>

                <Text style={styles.label}>Usuario</Text>
                <TextInput style={styles.textInput}
                        placeholder="Ingrese su nombre de usuario"
                        onChangeText={(text: string) => setUsername(text)}
                ></TextInput>

                <Text style={styles.label}>Correo Electronico</Text>
                <TextInput style={styles.textInput}
                        autoComplete={"email"}
                        placeholder="Ingrese su correo electronico"
                        keyboardType="email-address"
                        onChangeText={(text: string) => setEmail(text)}
                ></TextInput>

                <Text style={styles.label}>Contraseña</Text>
                <TextInput style={styles.textInput}
                        autoComplete={"password"}
                        placeholder="Ingrese su contraseña"
                        secureTextEntry={true}
                        onChangeText={(text: string) => setPassword(text)}
                ></TextInput>

                <Text style={styles.label}>Repetir Contraseña</Text>
                <TextInput style={styles.textInput}
                        autoComplete={"password"}
                        placeholder="Repita su contraseña"
                        secureTextEntry={true}
                        onChangeText={(text: string) => setPassword2(text)}
                ></TextInput>



                <ButtonWithIcon text={"Registrarse"} iconName={"user-plus"}
                fnDeOtroComponente={ async () =>  {
                    let r = await registrar()
                    if (r){
                        setShowModal(true);
                        if (r.success){
                            setDatos("Cuenta creada exitosamente")
                        }
                        else{
                            let respuesta = ""
                            for (let i = 0; i < r.errors.length; i++) {
                                respuesta += r.errors[i] + "\n";
                            }
                            setDatos(respuesta)
                        }
                    }
                }}
                />
            </View>
            <ModalRegister showModalBoolean={showModal} setShowModalBoolean={setShowModal} datos={datos}></ModalRegister>
        </>

    )
};

export default RegisterView;