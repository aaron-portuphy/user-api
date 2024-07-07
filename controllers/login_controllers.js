import { loginModel } from "../models/login_model.js";

export const getUser = async (req, res, next) =>{
    try {
        const gottenUser = await loginModel.find()
        res.json(gottenUser)
    } catch (error) {
        next(error)
    }
}
