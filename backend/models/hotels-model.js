import mongoose from 'mongoose'
import validator from 'validator'


const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter Hotel name'],
            maxLength: [30, 'Hotel name cannot exceed 30 characters'],
            unique: [true, 'Hotels name exists in our databases please enter a new username']
        },
        email: {
            type: String,
            required: [true, 'Please enter Hotel email'],
            unique: true,
            validate: [validator.isEmail, 'Please enter valid email address']
        },
        rooms: {
            type: Number,
            required: [true, 'Please enter Hotel number of rooms '],
        }

    }
)




const Hotels = mongoose.model('Hotels', hotelSchema)
export default Hotels
