export interface errorType {
    error?: string,
    message: string[] | string,
    statusCode?: number
}

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    roles: Roles[],
    cinemas: Cinemas[]
}

export interface getMeResponse {
    user: User,
    token: string
}

export interface Roles {
    id: number,
    value: string,
    description: string,
    UserRoles: UserRole
}

export interface Cinemas {
    id: number,
    cinemaNumber: number,
    name: string,
    date: string,
    image: string,
    rate: number,
    UserCinemas: UserCinema
}

export interface UserCinema {
    id: number,
    cinemaId: number,
    userId: number,
}

export interface UserRole {
    id: number,
    roleId: number
    userId: number,
}

export interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export interface CreateUser {
    username?: string,
    email: string,
    password: string
}
