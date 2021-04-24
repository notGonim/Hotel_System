import { asyncError } from "../middleware/catchAsyncErrors.js"
import Hotels from "../models/hotels-model.js";
import { ErrorHandler } from "../utils/errorHandler.js";



export const newHotel = asyncError(async (req, res, next) => {

    const { name, email, rooms } = req.body
    const hotel = await Hotels.create({ name, email, rooms })

    res.status(201).json({
        success: true,
        hotel
    })

})


export const allHotels = asyncError(async (req, res, next) => {

    const hotels = await Hotels.find()

    let numberOfrooms = 0

    hotels.forEach(hotel => {
        numberOfrooms += hotel.rooms
    })

    res.status(201).json({
        success: true,
        numberOfrooms,
        hotels
    })
})

export const deleteHotel = asyncError(async (req, res, next) => {

    const hotel = await Hotels.findById(req.params.id)
    if (!hotel) {
        return next(new ErrorHandler('No hotel Exists'))
    }
    await hotel.remove()

    res.status(201).json({
        success: true
    })

})
