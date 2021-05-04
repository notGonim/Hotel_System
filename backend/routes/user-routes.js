import express from 'express'
import { userRegister, login, logout } from '../controllers/user-controller.js'

export const UserRouter = express.Router()




UserRouter.post('/register', userRegister)
UserRouter.post('/login', login)
UserRouter.get('/logout', logout)