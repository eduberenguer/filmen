import mongoose from "mongoose";

const { Schema } = mongoose;

interface IUserSchema {
    name: string;
    email: string;
    password: string;
}

export const usersSchema = new Schema<IUserSchema>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
});
