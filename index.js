import express from 'express';
import { dbconnect } from './config/db.js';


// Assign express to app variable
const app = express();

//Connecting to database
dbconnect()

//Apply Middlewares
app.use(express.json())

//Listening for incoming request
app.listen('6060', (req, res)=>{
    console.log('Listening on Port 6060')
})

