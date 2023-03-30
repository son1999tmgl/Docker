import express from 'express'

import {
    userController
} from "../controllers/index.js"

const router = express.Router()
router.get('/:id', userController.getDetailUser)
router.post('/login', userController.login)
router.post('/register', userController.register)



export default router