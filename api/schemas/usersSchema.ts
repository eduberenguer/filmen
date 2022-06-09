import mongoose from "mongoose";

const { Schema } = mongoose;

interface IUserSchema {
    name: string;
    email: string;
    date: string;
    password: string;
    favourite?: Array<string>;
}

export const usersSchema = new Schema<IUserSchema>({
    name: { type: String },
    email: { type: String },
    date: { type: String },
    password: { type: String },
    favourite: { type: Array },
});
