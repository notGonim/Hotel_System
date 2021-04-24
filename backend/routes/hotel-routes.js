import express from 'express'
import { newHotel, allHotels, deleteHotel } from '../controllers/hotel-controllers.js'



export const HotelsRouter = express.Router()



HotelsRouter.post('/new', newHotel)
HotelsRouter.get('/all', allHotels)
HotelsRouter.delete('/delete', deleteHotel)