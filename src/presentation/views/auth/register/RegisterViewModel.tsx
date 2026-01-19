import {useState} from "react";


type RegisterData = {
    email: string;
    password: string;
    confirmPassword: string;
    direccion: string;
    numTelefono?: string;
}

const RegisterViewModel = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [direccion, setDireccion] = useState<string>('');
  const [numTelefono, setNumTelefono] = useState<string>('');

  const registrar = () => {
    const data : RegisterData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        direccion: direccion,
        numTelefono: numTelefono
    }

      if (validate()){
          console.log("Registro exitoso:", data);
      }
  }

  const validate = () => {
    // if (!email.includes("@")){
    //     alert("El email debe contener @");
    //     return false;
    // }
    if (password.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    if (password !== confirmPassword){
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;
  }
// contraseña repetir contra direccion ynunmero de telefono

  return {
    email,
    password,
      direccion,
      numTelefono,
      confirmPassword,
      setConfirmPassword,
    setEmail,
    setPassword,
      setDireccion,
      setNumTelefono,
      registrar
  }
}

export default RegisterViewModel;
