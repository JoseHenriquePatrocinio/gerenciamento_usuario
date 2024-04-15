import Result from "../errorhandler/ErrorHandler";
import TResponse from "../model/ResponseModel";
import { LoginModel } from "../model/LoginModel";
import { compareSync } from 'bcrypt';
import prismaClient from "../prisma";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets';

export default {
    login: async (login: LoginModel): Promise<Result<TResponse>> => {

        try {

            let user = await prismaClient.user.findFirst({ where: { email: login.email, active: true } });

            if (!user) {
                return Result.fail<TResponse>('User does not exists');
            }

            if (!compareSync(login.senha, user.senha)) {
                return Result.fail<TResponse>('Incorret password');
            }

            const token = jwt.sign({
                id: user.id
            }, JWT_SECRET)

            const response: TResponse = {
                msg: "User logged in successfully",
                data: {
                    user: {
                        primeiro_nome: user.primeiro_nome,
                        ultimo_nome: user.ultimo_nome,
                        email: user.email
                    },
                    token
                }
            };

            return Result.ok<TResponse>(response);

        } catch (error) {
            return Result.fail<TResponse>('An error occurred while logging the user');
        }
    }
}