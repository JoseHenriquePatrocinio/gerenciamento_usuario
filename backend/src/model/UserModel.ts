export class CreateUserRequest {
    id: number;
    primeiro_nome: string;
    ultimo_nome: string;
    email: string;
    senha: string;
    active: boolean;
    nivel_acesso: number;
    created_at: string;

    constructor(
        id: number,
        primeiro_nome: string,
        ultimo_nome: string,
        email: string,
        senha: string,
        active: boolean,
        nivel_acesso: number,
        created_at: string
    ) {
        this.id = id;
        this.primeiro_nome = primeiro_nome;
        this.ultimo_nome = ultimo_nome;
        this.email = email;
        this.senha = senha;
        this.active = active;
        this.nivel_acesso = nivel_acesso;
        this.created_at = created_at;
    }
}

export class UpdateUserRequest extends CreateUserRequest {
    updated_at: string;

    constructor(
        id: number,
        primeiro_nome: string,
        ultimo_nome: string,
        email: string,
        senha: string,
        active: boolean,
        nivel_acesso: number,
        created_at: string,
        updated_at: string
    ) {
        super(id, primeiro_nome, ultimo_nome, email, senha, active, nivel_acesso, created_at);
        this.updated_at = updated_at;
    }
}

