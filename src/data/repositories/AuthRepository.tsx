import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { LoginData} from "../../domain/entities/login-interface";
import { DataResponseAPI } from "../sources/remote/models/DataResponseAPI";
import APITiendaOnline from "../sources/remote/api/APITiendaOnline.android";
import { AxiosError } from "axios";


export class AuthRepositoryImpl implements AuthRepository {

    // @ts-ignore
    async login(data: LoginData): Promise<DataResponseAPI> {
        console.log("hola mundo");
    }

    async register(data: any): Promise<DataResponseAPI> {
        try {
            const response = await APITiendaOnline.post("/registro/", data);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as DataResponseAPI); //importante
        }
    }
}
