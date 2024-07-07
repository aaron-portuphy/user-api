import { Schema } from "mongoose";

const loginSchema = newSchema({
    username: {type: String, required: true },
    password: {type: String, required: true}
})

export const loginModel = ('login', loginSchema);