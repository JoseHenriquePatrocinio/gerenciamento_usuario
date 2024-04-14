import { Request, Response } from "express";
import UserService from "../services/UserService";


export default {
    async createUser(req: Request, res: Response) {
        const createdUser = await UserService.createUser(req.body);
        res.json(createdUser);
    },
    async updateUserByEmail(req: Request, res: Response) {
        const updatedUserByEmail = await UserService.updateUserByEmail(req.query.email as string, req.body);
        res.json(updatedUserByEmail);
    },
    async updateUserById(req: Request, res: Response) {
        const updatedUserById = await UserService.updateUserById(Number(req.query.id), req.body);
        res.json(updatedUserById);
    },
    async getUserByEmail(req: Request, res: Response) {
        const userByEmail = await UserService.getUserByEmail(req.query.email as string);
        res.json(userByEmail);
    },
    async getUserByName(req: Request, res: Response) {
        const userByName = await UserService.getUserByName(req.query.primeiro_nome as string);
        res.json(userByName);
    },
    async listUsers(req: Request, res: Response) {
        const users = await UserService.listUsers(req.body);
        res.json(users);
    }
};