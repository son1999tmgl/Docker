import express from "express"
//đọc biến môi trường(tỏng file .env)
import * as dotenv from 'dotenv'
import {
    usersRoute,
    studentRoute
} from './routes/index.js'

dotenv.config()

const app = express()
//cho phép đọc body của request dạng json
app.use(express.json())
const port = process.env.PORT ?? 3000
app.use('/users', usersRoute)
app.use('/student', studentRoute)
app.get('/', (req, res) => {
    res.send('response root route test')
})
app.listen(port, async() => {
    console.log(`Listening on port: ${port}`);
})
