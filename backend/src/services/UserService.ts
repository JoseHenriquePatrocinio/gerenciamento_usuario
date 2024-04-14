import { UserModel } from "../model/UserModel";
import { PrismaClient } from "@prisma/client";
import Util from "../util/Util";
import Result from "../errorhandler/ErrorHandler";
import ValidationBase from "../validation/ValidationBase";
import TResponse from "../model/ResponseModel";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default {
    createUser: async (user: UserModel): Promise<Result<TResponse>> => {
        try {
            //#region Validate

            if (!ValidationBase.isFirstNameValid(user.primeiro_nome)) {
                return Result.fail<TResponse>('First name is invalid')
            }

            if (!ValidationBase.isLastNameValid(user.ultimo_nome)) {
                return Result.fail<TResponse>('Last name is invalid')
            }

            if (!ValidationBase.isValidEmail(user.email)) {
                return Result.fail<TResponse>('Email is invalid');
            }

            if (!user.senha) {
                return Result.fail<TResponse>('Password is invalid');
            }

            if (!ValidationBase.isValidRole(user.nivel_acesso)) {
                return Result.fail<TResponse>('Role is invalid');
            }

            //#endregion

            await prisma.user.create({
                data: {
                    id: user.id,
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    senha: await bcrypt.hash(user.senha, 10),
                    active: true,
                    nivel_acesso: user.nivel_acesso,
                    created_at: Util.getCurrentDateTime(),
                    updated_at: Util.getCurrentDateTime()
                },
            });

            const response: TResponse = {
                msg: "User created successfully",
                data: {
                    id: user.id,
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    nivel_acesso: user.nivel_acesso,
                }
            };

            return Result.ok<TResponse>(response);
        } catch (error) {
            return Result.fail<TResponse>('An error occurred while creating the user');
        }
    },

    updateUser: async (email: string, user: UserModel): Promise<Result<TResponse>> => {
        try {

            //#region Validate

            if (!ValidationBase.isFirstNameValid(user.primeiro_nome)) {
                return Result.fail<TResponse>('First name is invalid')
            }

            if (!ValidationBase.isLastNameValid(user.ultimo_nome)) {
                return Result.fail<TResponse>('Last name is invalid')
            }

            if (!ValidationBase.isValidEmail(user.email)) {
                return Result.fail<TResponse>('Email is invalid');
            }

            if (!user.senha) {
                return Result.fail<TResponse>('Password is invalid');
            }

            if (!ValidationBase.isValidRole(user.nivel_acesso)) {
                return Result.fail<TResponse>('Role is invalid');
            }

            //#endregion

            await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    senha: await bcrypt.hash(user.senha, 10),
                    active: user.active,
                    nivel_acesso: user.nivel_acesso,
                    updated_at: Util.getCurrentDateTime()
                },
            });

            const response: TResponse = {
                msg: "User updated successfully",
                data: {
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    active: user.active,
                    nivel_acesso: user.nivel_acesso,
                }
            };

            return Result.ok<TResponse>(response);
        } catch (error) {
            return Result.fail<TResponse>('An error occurred while updating the user');
        }
    },

    getUserByEmail: async (email: string): Promise<Result<TResponse>> => {

        try {

            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            })

            if (!user) {
                return Result.fail<TResponse>('User not found');
            }

            const response: TResponse = {
                msg: "User found successfully",
                data: {
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    active: user.active,
                    nivel_acesso: user.nivel_acesso,
                }
            };

            return Result.ok<TResponse>(response);

        } catch (error) {
            return Result.fail<TResponse>('An error occurred while updating the user');
        }

    }
};
