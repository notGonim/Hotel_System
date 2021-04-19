import express from 'express'
import { errors } from './middleware/errors.js'
 



// initialize the man express func  to use to build RESTAPI 
export const app = express()

app.use(express.json())


//to handle all the routes 





//middleware to handle all errors 

app.use(errors)




