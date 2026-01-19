// estructura de datos que enviamos al backend

export type LoginData = {
    email: string;
    password: string;
}


// convertimos y estructuramos los datos que recibimos del back
export interface UserInterface {
    id: number,
    email: string,
    username: string,
    token: string,
    refresh_token: string,
}

