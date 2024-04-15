import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export default{
    async login(req: Request, res: Response) {
        const logedUser = await AuthService.login(req.body);
        res.json(logedUser);
    }
}