import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";

export default mongoose.model('Student',
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return value.length > 3
                },
                message: "Usernam must be at 3 character"
        
            } 
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: (value) => isEmail,
                message: "Email must be at 3 character"
        
            } 
        },
        
        language: {
            type: [String]
        },
        gender: {
            type: String,
            enum: {
                values: ['nam', 'nữ'],
                message: "{VALUE} is not supported"
            }
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }  
    })
)