import { Router } from "express";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";

const router = Router();

router.post("/login", AuthController.login);

router.post("/createuser", UserController.createUser);
router.put("/updateuserbyemail", UserController.updateUserByEmail);
router.put("/updateuserbyid", UserController.updateUserById);
router.get("/getuserbyemail", UserController.getUserByEmail);
router.get("/getuserbyname", UserController.getUserByName);
router.post("/listUsers", UserController.listUsers);
router.put("/deactivateuser", UserController.deactivateUser);

export default router;