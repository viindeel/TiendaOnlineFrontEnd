import {Text} from "react-native";
import {useState} from "react";

type LoginData = {
    email: string;
    password: string;
}


const LoginViewModel = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const iniciarSesion = () => {
        const data : LoginData = {
            email: email,
            password: password
        };

        if (validate(data)){
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
