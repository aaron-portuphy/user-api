import { signupModel } from "../models/signup_model.js";

export const postUser = async (req, res, next) =>{
    try {
        const postedUser = await signupModel.create(req.body)
        res.json(postedUser)
    } catch (error) {
        next(error)
    }
}