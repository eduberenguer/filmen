// @ts-ignore
import * as crud from "../services/filmen.crud.ts";
// @ts-ignore
import { filmenConnect } from "../services/connection.ts";
import { Request, Function } from "express";

const Filmen = filmenConnect();

export const getUsers = async (req: Request, res: Request, next: Function) => {
    try {
        crud.getUsers(Filmen).then((data: any) => res.json(data));
    } catch (err) {
        next(err);
    }
};
