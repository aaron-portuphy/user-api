import mongoose from "mongoose";
import 'dotenv/config'

const dbconnection = process.env.MONGO_URL;

export const dbconnect = ()=>{
    mongoose.connect(dbconnection).then(
        console.log('Database is connected')
    )
}