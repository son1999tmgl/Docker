import Exception from "../exceptions/Exepction.js";
import HttpStatusCode from "../exceptions/HttpStatusCode.js";
import { userRepository } from "../repositories/index.js";
import {EventEmitter} from 'node:events'

const myEvent = new EventEmitter()

myEvent.on("event.register.user", (params) => {
    console.log('they talk ablout: ', params);
})

const login = async (req, res) => {
    // email, password
    const { email, password } = req.body;
    try {
        let exitsUser = await userRepository.login({ email, password })
        res.status(HttpStatusCode.OK).json({
            exitsUser
        })
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        })
    }


}

const register = async (req, res) => {


    const { name, email, password, phoneNumber, address } = req.body;

    try {
        let user = await await userRepository.register({ name, email, password, phoneNumber, address })
        res.status(HttpStatusCode.INSERT_OK).json({
            mes: "register thanh cong",
            user
        })
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        })
    }

    
}

const getDetailUser = async (req, res) => {

}

export default {
    login,
    register,
    getDetailUser
}