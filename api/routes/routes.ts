import { insertNewUser } from "../../app/src/reducer/actionCreators";
import express from "express";
import {
    getUsers,
    registerNewUser,
    loginUser,
    // @ts-ignore
} from "../controllers/users.controller.ts";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerNewUser);
router.post("/login", loginUser);

export default router;
