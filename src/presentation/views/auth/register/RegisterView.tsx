import {TextInput, View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import {styles} from "./RegisterStyle";
import viewModel from "./RegisterViewModel"


const RegisterView = () => {

    const {email, password, setEmail, setPassword, direccion, numTelefono, setDireccion, setNumTelefono, confirmPassword, setConfirmPassword, registrar} = viewModel();
// contraseña repetir contra direccion ynunmero de telefono

    return (
        <View>
            <Text style={styles.titulo}>Registrarte</Text>

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
                       onChangeText={(text: string) => setConfirmPassword(text)}
            ></TextInput>

            <Text style={styles.label}>Direccion</Text>

            <TextInput style={styles.textInput}
                       autoComplete={"street-address"}
                       placeholder="Ingrese su direccion"
                       onChangeText={(text: string) => setDireccion(text)}
            ></TextInput>

            <Text style={styles.label}>Numero de telefono</Text>

            <TextInput style={styles.textInput}
                       autoComplete={"tel"}
                       placeholder="Ingrese su numero de telefono"
                       keyboardType="phone-pad"
                       onChangeText={(text: string) => setNumTelefono(text)}
            ></TextInput>



            <TouchableOpacity style={styles.buttonSubmit}
            onPress={() => {registrar();}}

            >
                <Text style={{textAlign: 'center', color: 'white'}}>Registrarse</Text>
            </TouchableOpacity>

        </View>

    )
};

export default RegisterView;