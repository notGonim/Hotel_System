import express from 'express'
import { userRegister } from '../controllers/user-controller.js'

export const UserRouter = express.Router()




UserRouter.post('/register', userRegister)