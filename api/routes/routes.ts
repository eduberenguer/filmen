import express from "express";
import {
    getUsers,
    registerNewUser,
    loginUserData,
    addFavorite,
    // @ts-ignore
} from "../controllers/users.controller.ts";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerNewUser);
router.post("/login", loginUserData);
router.patch("/addFavourite/:id", addFavorite);

export default router;
