import axios from "axios";


// 10.0.2.2 es el localhost con android
// localhost o 127.0.0.1 es el localhost con OTRO SO QUE NO SEA ANDROID
// 192.168.1.165 poner la ip funciona en ambas paltaformas


const APITiendaOnline = axios.create({
    baseURL: "http://10.0.2.2:8000",
    headers: {
        "Content-Type": "application/json",
    }
});

export default APITiendaOnline;