import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";

export default mongoose.model('Class',
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return value.length > 3
                },
                message: "Class name must be at 3 character"
        
            } 
        }
        
    })
)