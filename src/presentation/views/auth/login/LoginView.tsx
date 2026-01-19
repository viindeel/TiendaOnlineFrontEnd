import {TextInput, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {styles} from "./LoginStyle";
import viewModel from "./LoginViewModel"
import {useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../App";


const LoginView = () => {

    const {email, password, setEmail, setPassword, iniciarSesion} = viewModel();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text style={styles.titulo}>Iniciar Sesion</Text>

            <Text style={[styles.label, {color: 'gray'}, {fontSize: 12}]}>
                Email
            </Text>
            <TextInput style={styles.textInput}
                       autoComplete={"email"}
                       placeholder="Ingrese su correo electronico"
                       keyboardType="email-address"
                       onChangeText={(text: string) => setEmail(text)}
            ></TextInput>

            {/*<Text style={styles.label}>*/}
            {/*    Contraseña*/}
            {/*</Text>*/}
            {/*<TextInput style={styles.textInput}*/}
            {/*           autoComplete={"password"}*/}
            {/*           placeholder="Ingrese su contraseña"*/}
            {/*           keyboardType="default"*/}
            {/*           secureTextEntry={true}*/}
            {/*           onChangeText={(text: string) => setPassword(text)}*/}
            {/*></TextInput>*/}

            <TouchableOpacity
                style={styles.continue}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 17}}>Continue with Email</Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center', color: 'gray', margin: 30}}>----------------- Or continue with -----------------</Text>

            <TouchableOpacity
                style={styles.continue2}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={{textAlign: 'center', fontSize: 17}}>Continue with Google</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.continue2}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={{textAlign: 'center', fontSize: 17}}>Continue with Apple</Text>
            </TouchableOpacity>

            {/*<TouchableOpacity*/}
            {/*    style={styles.buttonSubmit}*/}
            {/*    onPress={() => {alert(`Email: ${email} Contraseña: ${password}`);}}*/}
            {/*>*/}

            {/*    <Text style={{textAlign: 'center', color: 'white'}}>Enter</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Registro')}>*/}
            {/*    <Text style={{textAlign: 'center'}}>Registrarse</Text>*/}
            {/*</TouchableOpacity>*/}

        </View>
    );
};

export default LoginView;