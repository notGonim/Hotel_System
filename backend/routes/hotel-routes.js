import express from 'express'
import { newHotel } from '../controllers/hotel-controllers.js'



export const HotelsRouter = express.Router()



HotelsRouter.post('/new',newHotel)