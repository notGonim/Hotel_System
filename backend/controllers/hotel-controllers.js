import { asyncError } from "../middleware/catchAsyncErrors.js"
import Hotels from "../models/hotels-model.js";
import { ErrorHandler } from "../utils/errorHandler.js";



export const newHotel = asyncError(async (req, res, next) => {

    const { name, email, rooms } = req.body
    const hotel = await Hotels.create({ name, email, rooms })

    res.status(200).json({
        success: true,
        hotel
    })

})