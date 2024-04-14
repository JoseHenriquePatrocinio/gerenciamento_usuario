import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/createuser", UserController.createUser);
router.post("/updateuser", UserController.updateUser);
router.get("/getuserbyemail", UserController.getUserByEmail);

export default router;