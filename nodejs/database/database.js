import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
import Exception from "../exceptions/Exepction.js";

async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        print("connect mongoose success", OutputType.SUCCESS)
    } catch (error) {
        throw new Exception('Cannot connect to mongoDB')
    }
}


export default connect