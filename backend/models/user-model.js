import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
import crypto from 'crypto'


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Please enter your username'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
        unique: [true, 'Username exists in our databases please enter a new username']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {}


}, { timestamps: true })

const User = mongoose.model('Users', userSchema)
export default User
