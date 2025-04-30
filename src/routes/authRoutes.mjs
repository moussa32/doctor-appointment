import { Router } from "express";
import * as authController from "../controllers/authController.mjs";

const router = Router();

// Auth
// router.get("/register", authController.getRegister);
router.post("/register", authController.postRegister);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);

export default router;
