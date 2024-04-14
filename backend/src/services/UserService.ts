import UserModel from "../model/UserModel";
import { PrismaClient } from "@prisma/client";
import Util from "../util/Util";
import Result from "../errorhandler/ErrorHandler";
import ValidationBase from "../validation/ValidationBase";

const prisma = new PrismaClient();

export default {
    createUser: async (user: UserModel): Promise<Result<UserModel>> => {

        if (!ValidationBase.isFirstNameValid(user.primeiro_nome)) {
            return Result.fail<UserModel>('First name is invalid')
        }

        if (!ValidationBase.isLastNameValid(user.ultimo_nome)) {
            return Result.fail<UserModel>('Last name is invalid')
        }

        if (!ValidationBase.isValidEmail(user.email)) {
            return Result.fail<UserModel>('Email is invalid');
        }

        const createdUser = await prisma.user.create({
            data: {
                id: user.id,
                primeiro_nome: user.primeiro_nome,
                ultimo_nome: user.ultimo_nome,
                email: user.email,
                senha: user.senha,
                active: true,
                nivel_acesso: user.nivel_acesso,
                created_at: Util.getCurrentDateTime(),
            },
        });

        return Result.ok(createdUser);
    },
};