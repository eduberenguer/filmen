import express from "express";
// @ts-ignore
import { getUsers } from "../controllers/users.controller.ts";

const router = express.Router();

router.get("/", getUsers);

export default router;
