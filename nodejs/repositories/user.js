import Exception from "../exceptions/Exepction.js";
import { print, OutputType } from "../helpers/print.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const login = async ({ email, password }) => {
    let existingUser = await User.findOne({ email }).exec()
    if (!!existingUser) {
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!!isMatch) {
            //create java web token(JWT)
            let token = jwt.sign({
                data: existingUser
            },
                process.env.JWT_SECRET,
                {
                    expiresIn: '10 days'
                }
            )
            console.log('existingUser1: ', existingUser);

            existingUser.token = token
           
            return {...existingUser._doc, token}
        } else {
            throw Exception('Sai email hoặc password')
        }
    } else {
        throw new Exception('Sai email hoặc password')
    }
}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {
    try {
        const existingUser = await User.findOne({ email }).exec()
        if (!!existingUser) {
            throw new Exception("User already exits.")
        }


        //encrypt password, use bcrypt
        // const ismatched = await bcrypt.compare(password. existingUser.password)
        // if(!!ismatched) {

        // }

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            address
        })
        return newUser;
    } catch (error) {
        throw new Exception(error)
    }
}


export default {
    login,
    register
}