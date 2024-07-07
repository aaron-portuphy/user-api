import { Schema } from "mongoose";

const signupSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    dateofbirth: {type: Date, required: true},
    gender: {type: String, enums: true, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

export const signupModel = model('signup', signupSchema);