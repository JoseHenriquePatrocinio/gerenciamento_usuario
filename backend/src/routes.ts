import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/createuser", UserController.createUser);
router.put("/updateuserbyemail", UserController.updateUserByEmail);
router.put("/updateuserbyid", UserController.updateUserById);
router.get("/getuserbyemail", UserController.getUserByEmail);
router.get("/getuserbyname", UserController.getUserByName);
router.post("/listUsers", UserController.listUsers);
router.put("/deactivateuser", UserController.deactivateUser);

export default router;