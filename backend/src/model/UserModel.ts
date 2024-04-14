export default class UserModel {
    id: number
    nome: string
    email: string
    senha: string
    active: boolean
    nivel_acesso: number
    created_at: string

    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
        active: boolean,
        nivel_acesso: number,
        created_at: string) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
        this.active = active
        this.nivel_acesso = nivel_acesso
        this.created_at = created_at
    }
}