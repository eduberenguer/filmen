import mongoose from "mongoose";

const { Schema } = mongoose;

interface IUserSchema {
    name: string;
    email: string;
    date: string;
    password: string;
}

export const usersSchema = new Schema<IUserSchema>({
    name: { type: String },
    email: { type: String },
    date: { type: String },
    password: { type: String },
});
