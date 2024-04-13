import { Request, Response } from "express";
import UserService from "../services/UserService";


export default {
    async createUser(req: Request, res: Response) {
        const createdUser = await UserService.createUser(req.body);
        res.json(createdUser);
    }
};