import { UserModel, ListUsers } from "../model/UserModel";
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

            const existingUser = await prisma.user.findUnique({
                where: {
                    email: user.email
                },
            })
            
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

            if (existingUser) {
                return Result.fail<TResponse>('User already exists');
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

    updateUserByEmail: async (email: string, user: UserModel): Promise<Result<TResponse>> => {
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
                    id: user.id,
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

    updateUserById: async (id: number, user: UserModel): Promise<Result<TResponse>> => {
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
                    id: id
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
                    id: user.id,
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
                    active: true
                },
            })

            if (!user) {
                return Result.fail<TResponse>('User not found');
            }

            const response: TResponse = {
                msg: "User found successfully",
                data: {
                    id: user.id,
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    active: user.active,
                    nivel_acesso: user.nivel_acesso,
                }
            };

            return Result.ok<TResponse>(response);

        } catch (error) {
            return Result.fail<TResponse>('An error occurred while searching the user');
        }

    },

    getUserByName: async (nome: string): Promise<Result<TResponse>> => {

        try {

            const users = await prisma.user.findMany({
                where: {
                    primeiro_nome: {
                        startsWith: nome,
                    },
                    active: true
                },
            });

            if (users.length === 0) {
                return Result.fail<TResponse>('User not found');
            }

            const response: TResponse = {
                msg: "Users found successfully",
                data: {
                    users: users
                }
            };

            return Result.ok(response);

        } catch (error) {
            return Result.fail<TResponse>('An error occurred while searching the user');
        }

    },

    listUsers: async (pagination: ListUsers): Promise<Result<TResponse>> => {

        try {

            const users = await prisma.user.findMany({
                where: {
                    active: true
                },
                skip: (pagination.pagina - 1) * pagination.tamanhoPagina,
                take: pagination.tamanhoPagina
            })

            if (users.length === 0) {
                return Result.fail<TResponse>('User not found');
            }

            const response: TResponse = {
                msg: "Users found successfully",
                data: {
                    users: users
                }
            };

            return Result.ok(response);

        } catch (error) {
            return Result.fail<TResponse>('An error occurred while searching the user');
        }

    },

    deactivateUser: async (id: number): Promise<Result<TResponse>> => {

        try {

            const user = await prisma.user.findUnique({
                where: {
                    id: id
                },
            })

            if (!user) {
                return Result.fail<TResponse>('User not found');
            }

            if (!user.active) {
                return Result.fail<TResponse>('User is already deactivated');
            }

            await prisma.user.update({
                where: {
                    id: id
                },
                data: {
                    active: false,
                    updated_at: Util.getCurrentDateTime()
                },
            });

            const response: TResponse = {
                msg: "User deactivated successfully",
                data: {
                    id: user.id,
                    primeiro_nome: user.primeiro_nome,
                    ultimo_nome: user.ultimo_nome,
                    email: user.email,
                    active: user.active,
                    nivel_acesso: user.nivel_acesso,
                }
            };

            return Result.ok<TResponse>(response);

        } catch (error) {
            return Result.fail<TResponse>('An error occurred while deactivating the user');
        }

    }
};
