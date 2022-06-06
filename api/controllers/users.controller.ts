import { Request, Function } from "express";
// @ts-ignore
import * as crud from "../services/filmen.crud.ts";
// @ts-ignore
import { filmenConnect } from "../services/connection.ts";

const Filmen = filmenConnect();

export const registerNewUser = async (
    req: Request,
    res: Request,
    next: Function
) => {
    const newUser = { ...req.body, date: new Date() };
    try {
        crud.insertNewUser(newUser, Filmen).then((data: any) => res.json(data));
    } catch (err) {
        next(err);
    }
};

export const loginUserData = async (
    req: Request,
    res: Request,
    next: Function
) => {
    const dataUser = { ...req.body };
    try {
        crud.loginUser(dataUser, Filmen).then((data: any) => res.json(data));
    } catch (err) {
        next(err);
    }
};

export const getUsers = async (req: Request, res: Request, next: Function) => {
    try {
        crud.getUsers(Filmen).then((data: any) => res.json(data));
    } catch (err) {
        next(err);
    }
};
