import mongoose from "mongoose";
import { dbName } from "../constant.js";


const connectDB = async ()=>{
    try {
     const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
     console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`)   
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
        process.exit(1)
    }
}

export default connectDB