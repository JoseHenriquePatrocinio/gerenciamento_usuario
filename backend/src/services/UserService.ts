import { IUser } from "../model/UserModel"
import UserValidation from "../validation/UserValidation";
import { PrismaClient } from "@prisma/client";
import Util from "../util/Util";

const prisma = new PrismaClient();

export default {
    async createUser(user: IUser) {

        UserValidation.validateUser(user);

        addDataHora(user)

        const createdUser = await prisma.user.create({
            data: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                active: true,
                nivel_acesso: user.nivel_acesso,
                created_at: user.created_at,
            },
        });

        return createdUser;
    },

};

function addDataHora(user: IUser): void {
    user.created_at = Util.getCurrentDateTime();
}