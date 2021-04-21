import express from 'express'
import { errors } from './middleware/errors.js'
import bodyParser from 'body-parser'
import { UserRouter } from './routes/user-routes.js'






export const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())






//to handle all the routes 
app.use('/api',UserRouter)




//middleware to handle all errors 

app.use(errors)




