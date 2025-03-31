import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.port || 8000, ()=>{
        console.log(`Server is listening on port: ${process.env.port}`)
    })
})
.catch((err)=>{
    console.log('MongoDB connection failed',err)
})


