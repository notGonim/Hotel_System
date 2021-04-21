import { asyncError } from "../middleware/catchAsyncErrors.js"
import { ErrorHandler } from "../utils/errorHandler.js";
import User from "../models/user-model.js";




//handle user register   api/register 
export const userRegister = asyncError(async (req, res, next) => {

    const user = await User.create(req.body)

    const token = user.getJwtToken()
    
    res.status(201).json({
        success: true,
        token
    })

})