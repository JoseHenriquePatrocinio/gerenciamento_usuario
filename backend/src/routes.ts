import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/createuser", UserController.createUser);

export default router;