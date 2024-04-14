import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/createuser", UserController.createUser);
router.post("/updateuserbyemail", UserController.updateUserByEmail);
router.post("/updateuserbyid", UserController.updateUserById);
router.get("/getuserbyemail", UserController.getUserByEmail);
router.get("/getuserbyname", UserController.getUserByName);

export default router;