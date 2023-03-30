import { userRepository } from "../repositories/index.js";
import {EventEmitter} from 'node:events'

const myEvent = new EventEmitter()
myEvent.on("event.register.user", (params) => {
    console.log('they talk ablout: ', params);
})

const login = async (req, res) => {
    // email, password
    const { email, password } = req.body;
    await userRepository.login({ email, password })

    res.status(200).json({
        mes: "Login thanh cong"
    })

}

const register = async (req, res) => {


    const { name, email, password, phoneNumber, address } = req.body;
    await userRepository.register({ name, email, password, phoneNumber, address })
    myEvent.emit("event.register.user", { name, email, password, phoneNumber, address})
    res.status(200).json({
        mes: "register thanh cong"
    })
}

const getDetailUser = async (req, res) => {

}

export default {
    login,
    register,
    getDetailUser
}