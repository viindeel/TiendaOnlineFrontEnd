import {useState} from "react";
import { RegisterUseCase } from "../../../../domain/useCases/registerUseCase";


type RegisterData = {
    email: string;
    password1: string;
    password2: string;
    first_name: string;
    last_name: string;
    username: string;
}

const RegisterViewModel = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const registrar = async () => {
    const data : RegisterData = {
        email: email,
        password1: password,
        password2: password2,
        first_name: firstName,
        last_name: lastName,
        username: username
    }

      if (validate()){
          const response = await RegisterUseCase(data);
          console.log("Respuesta: ", response)
          return response
      }
      else{
        return false;
      }
  }

  const validate = () => {
     if (!lastName || !firstName || !username || !email || !password || !password2){
        alert("Todos los campos son obligatorios");
        return false;
    }
    if (!email.includes("@")){
        alert("El email debe contener @");
        return false;
    }
    if (password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    if (password !== password2){
        alert("Las contraseñas no coinciden");
        return false;
    }
   
    return true;
  }
// contraseña repetir contra direccion ynunmero de telefono

  return {
    email,
    password,
      password2,  
      firstName,
      lastName,
      username,
      setPassword2,
    setEmail,
    setPassword,
      setFirstName,
      setLastName,
      setUsername,
      registrar
  }
}

export default RegisterViewModel;
