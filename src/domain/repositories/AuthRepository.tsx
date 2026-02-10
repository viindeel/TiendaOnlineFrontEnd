import { DataResponseAPI } from "../../data/sources/remote/models/DataResponseAPI";
import { LoginData } from "../entities/login-interface";

export interface AuthRepository {

    login(data: LoginData): Promise<DataResponseAPI> // el promise la hace asincrona
    
    register(data: any): Promise<DataResponseAPI>
}