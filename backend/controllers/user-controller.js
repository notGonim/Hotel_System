import { asyncError } from "../middleware/catchAsyncErrors.js"
import { ErrorHandler } from "../utils/errorHandler.js";
import User from "../models/user-model.js";
import { sendToken } from "../utils/jwtTokens.js";




//handle user register   api/register 
export const userRegister = asyncError(async (req, res, next) => {

    const user = await User.create(req.body)

    const token = user.getJwtToken()

    res.status(201).json({
        success: true,
        token
    })

})
//edit user data   api/edit 
export const editUserData = asyncError(async (req, res, next) => {

    const newUserData = {
        username: req.body.username,
        email: req.body.email
    }
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true
    })
})

//getting currently logged in user details  -> api/me
export const getUserProfile = asyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success: true,
        user
    })
})


//handle user login       api/login
export const login = asyncError(async (req, res, next) => {

    //get user password and email
    const { email, password } = req.body

    //check if password && email entered by user
    if (!password || !email)
        return next(asyncError('Please enter your email and password ', 401))

    //search user`s email in database and get it if its exists
    const user = await User.findOne({ email }).select('+password')

    //check if user is in our databases
    if (!user)
        return next(asyncError('User not found please enter valid email', 401))

    //check if the user`s password is correct
    const isPasswordMatch = await user.matchPassword(password)
    if (!isPasswordMatch)
        return next(asyncError('User not found Please enter Valid Email and Password', 401))

    //sending token 
    const token = user.getJwtToken()
    sendToken(user, 200, res)

})

//handle user logout   
export const logout = asyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'Logged Out'
    })
})