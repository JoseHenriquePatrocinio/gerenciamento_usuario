import { Request, Response } from "express";
import UserService from "../services/UserService";


export default {
    async createUser(req: Request, res: Response) {
        const createdUser = await UserService.createUser(req.body);
        res.json(createdUser);
    },
    async updateUser(req: Request, res: Response) {
        const updatedUser = await UserService.updateUser(req.query.email as string, req.body);
        res.json(updatedUser);
    },
    async getUserByEmail(req: Request, res: Response) {
        const userByEmail = await UserService.getUserByEmail(req.query.email as string);
        res.json(userByEmail);
    },
    async getUserByName(req: Request, res: Response) {
        const userByName = await UserService.getUserByName(req.query.primeiro_nome as string);
        res.json(userByName);
    }

};