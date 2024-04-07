import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("Connection with mongodb successful")
    } catch (error) {
        console.log(`Error in Database connection:- ${error}`)
        console.log(`${process.env.MONGO_URI}`)
    }
}
export default connectDB;