import express from 'express'
import { userRegister, login, logout, editUserData, getUserProfile } from '../controllers/user-controller.js'
import { isUserAuthenticated } from '../middleware/auth-routes.js'

export const UserRouter = express.Router()




UserRouter.post('/register', userRegister)
UserRouter.post('/login', login)
UserRouter.get('/logout', logout)
UserRouter.put('/edit', isUserAuthenticated, editUserData)
UserRouter.get('/me', isUserAuthenticated, getUserProfile)
