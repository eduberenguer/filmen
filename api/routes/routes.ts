import express from "express";
import {
    getUsers,
    registerNewUser,
    loginUserData,
    // @ts-ignore
} from "../controllers/users.controller.ts";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerNewUser);
router.post("/login", loginUserData);

export default router;
