import { LoginData, UserInterface } from "../entities/login-interface";

export interface AuthInterface {

    login(data: LoginData): Promise<UserInterface>;
    register(data: LoginData): Promise<UserInterface>;
}