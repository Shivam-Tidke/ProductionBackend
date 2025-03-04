
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config();

connectDB()





















/*const app = express()

(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        app.on("error", (error)=>{
            console.log("Errr:", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listen on ${process.env.PORT}`);
        })
        
    } catch (error) {
    console.error("Error: ", error)
    throw err
     
    }

})()*/