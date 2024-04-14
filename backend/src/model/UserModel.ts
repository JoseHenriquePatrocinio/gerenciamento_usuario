export default class UserModel {
    id: number
    primeiro_nome: string
    ultimo_nome: string
    email: string
    senha: string
    active: boolean
    nivel_acesso: number
    created_at: string

    constructor(
        id: number,
        primeiro_nome: string,
        ultimo_nome: string,
        email: string,
        senha: string,
        active: boolean,
        nivel_acesso: number,
        created_at: string) {
        this.id = id
        this.primeiro_nome = primeiro_nome
        this.ultimo_nome = ultimo_nome
        this.email = email
        this.senha = senha
        this.active = active
        this.nivel_acesso = nivel_acesso
        this.created_at = created_at
    }
}