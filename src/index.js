// To use this dot env as an impot as ES6 module rather than require syntex we have to do 
// changes in the package json script 
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()