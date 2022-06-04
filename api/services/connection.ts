import dotenv from "dotenv";
import mongoose from "mongoose";
// @ts-ignore
import { usersSchema } from "../schemas/usersSchema.ts";

dotenv.config();

export const mongoConnect = async () => {
    const user = process.env.USER_NAME;
    const password = process.env.USER_PASSWORD;
    const uri = `mongodb+srv://${user}:${password}@cluster0.erjuzvi.mongodb.net/?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
};

export const filmenConnect = (collection = "users") => {
    mongoConnect();

    const Filmen = mongoose.model(collection, usersSchema);
    return Filmen;
};
