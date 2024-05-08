export class LoginModel {
    email: string;
    senha: string;

    constructor(email: string, senha: string) {
        this.email = email;
        this.senha = senha
    }
}

export class AuthValidate {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}
