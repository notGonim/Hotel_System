import express from 'express'
import { errors } from './middleware/errors.js'
import bodyParser from 'body-parser'






export const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())






//to handle all the routes 





//middleware to handle all errors 

app.use(errors)




