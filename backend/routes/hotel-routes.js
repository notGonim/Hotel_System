import express from 'express'
import { newHotel, allHotels } from '../controllers/hotel-controllers.js'



export const HotelsRouter = express.Router()



HotelsRouter.post('/new', newHotel)
HotelsRouter.get('/all', allHotels)