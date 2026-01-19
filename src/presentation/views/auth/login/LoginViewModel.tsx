import {Text} from "react-native";
import {useState} from "react";
import { LoginData } from "../../../../domain/entities/login-interface";
import { loginUseCase } from "../../../../domain/useCases/loginUseCase";


const LoginViewModel = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const iniciarSesion = async () => {
        const data : LoginData = {
            email: email,
            password: password
        };

        if (validate(data)){
            const response = await loginUseCase(data);
            alert(`Email: ${data.email}, Contraseña: ${data.password}`)
            console.log(data)
        }
    }
    
     const validate = (data: LoginData) => {
    // if (!email.includes("@")){
    //     alert("El email debe contener @");
    //     return false;
    // }
    if (password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    return true;
  }

    return {
        email,
        password,
        setEmail,
        setPassword,
        iniciarSesion
    }
}

export default LoginViewModel;
