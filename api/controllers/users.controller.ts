import { Request, Function, NextFunction } from "express";
import bcrypt from "bcryptjs";
// @ts-ignore
import * as crud from "../services/filmen.crud.ts";
// @ts-ignore
import { filmenConnect } from "../services/connection.ts";
import * as createError from "../controllers/errors.js";

const Filmen = filmenConnect();

export const registerNewUser = async (
    req: Request,
    res: Request,
    next: Function
) => {
    const userToCheck = req.body;
    console.log(userToCheck);

    if (!userToCheck.email || !userToCheck.password || !userToCheck.name) {
        next(createError.createUserError);
    } else {
        const encryptedpassword = bcrypt.hashSync(req.body.password);
        const newUser = {
            ...req.body,
            date: new Date(),
            favourite: [],
            password: encryptedpassword,
        };
        const result = await crud
            .insertNewUser(newUser, Filmen)
            .then((data: any) => res.json(data));
        console.log(result);
    }
};

export const loginUserData = async (
    req: Request,
    res: Request,
    next: NextFunction
) => {
    const userToCheck = req.body;
    const userDb = await Filmen.findOne({ email: req.body.email });

    if (!userToCheck.email || !userToCheck.password || !userDb) {
        next(createError.loginError);
    } else {
        const comparePassword = bcrypt.compareSync(
            userToCheck.password,
            userDb.password
        );

        if (!comparePassword) next(createError.loginError);
        else {
            crud.loginUser(userDb, Filmen).then((data: any) => res.json(data));
        }
    }
};

export const getUsers = async (req: Request, res: Request, next: Function) => {
    try {
        crud.getUsers(Filmen).then((data: any) => res.json(data));
    } catch (err) {
        next(err);
    }
};

export const addFavorite = async (
    req: Request,
    res: Request,
    next: Function
) => {
    const {
        body: { userId, itemId },
    } = req;

    try {
        crud.addFavorite(userId, itemId, Filmen).then((data: any) =>
            res.json(data)
        );
    } catch (err) {
        next(err);
    }
};
