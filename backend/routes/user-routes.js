import express from 'express'
import { userRegister, login, logout, editUserData } from '../controllers/user-controller.js'

export const UserRouter = express.Router()




UserRouter.post('/register', userRegister)
UserRouter.post('/login', login)
UserRouter.get('/logout', logout)
UserRouter.put('/edit', editUserData)