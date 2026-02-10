import React, { useState } from "react";
import {TextInput, View, Text, TouchableOpacity} from "react-native";
import {styles} from "./LoginStyle";
import viewModel from "./LoginViewModel";
import {useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/RootNavigator";
import {ButtonWithIcon} from "../../../sharedComponents/ButtonWithIcon";
import { ModalRegister } from "../register/Components/ModalRegister";
import {AuthProvider, useAuth} from "../../../context/AuthContext";

const LoginView = () => {

    const {user} = useAuth()

    const [showModal, setShowModal] = useState(false);
    const [datos, setDatos] = useState("");

    const {email, password, setEmail, setPassword, iniciarSesion} = viewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <>
            <View style={{ flex: 1 }}>
                <Text style={styles.titulo}>Iniciar Sesión</Text>

                <Text style={[styles.label, {color: 'gray'}, {fontSize: 12}]}>
                    Email
                </Text>
                <TextInput
                    style={styles.textInput}
                    autoComplete={"email"}
                    placeholder="Ingrese su correo electrónico"
                    keyboardType="email-address"
                    onChangeText={(text: string) => setEmail(text)}
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.textInput}
                    autoComplete={"password"}
                    placeholder="Ingrese su contraseña"
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText={(text: string) => setPassword(text)}
                />

                {/*<TouchableOpacity*/}
                {/*    style={styles.continue}*/}
                {/*    onPress={async () => {*/}
                {/*        iniciarSesion();*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 17}}>*/}
                {/*        Continue with Email*/}
                {/*    </Text>*/}
                {/*</TouchableOpacity>*/}

                <Text style={{textAlign: 'center', color: 'gray', margin: 30}}>
                    ----------------- Or continue with -----------------
                </Text>

                <TouchableOpacity
                    style={styles.continue2}
                    onPress={async () => {
                        let r = await iniciarSesion();
                        console.log(r)
                        if (r) {
                            if (r.success) {
                                setDatos("Sesión iniciada con éxito");
                                navigation.navigate("Home");
                            } else {
                                setShowModal(true);
                                let respuesta = r.errors ? r.errors.join("\n") : "Error desconocido";
                                setDatos(respuesta);
                            }
                        }
                    }}
                >
                    <Text style={{textAlign: 'center', fontSize: 17}}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.continue2}
                    onPress={() => navigation.navigate('Registro')}
                >
                    <Text style={{textAlign: 'center', fontSize: 17}}>Continue with Apple</Text>
                </TouchableOpacity>

                <ButtonWithIcon
                    text={"Entrar"}
                    fnDeOtroComponente={async () => {
                        let r = await iniciarSesion();
                        if (r) {
                            if (r.success) {
                                setDatos("Sesión iniciada con éxito");
                                navigation.navigate("Home");
                            } else {
                                setShowModal(true);
                                let respuesta = r.errors ? r.errors.join("\n") : "Error desconocido";
                                setDatos(respuesta);
                            }
                        }
                    }}
                    type="lg"
                    iconName="sign-in"
                />
            </View>

            <ModalRegister
                showModalBoolean={showModal}
                setShowModalBoolean={setShowModal}
                datos={datos}
            />
        </>
    );
};

export default LoginView;