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
        location: {
            type: String,
            required: [true, 'Please enter Hotel location'],
            unique: true,
        },
        url: {
            type: String,
            required: [true, 'Please enter Hotel pic url'],
            unique: true,
        },
        rooms: {
            type: Number,
            required: [true, 'Please enter Hotel number of rooms '],
        }

    }
)




const Hotels = mongoose.model('Hotels', hotelSchema)
export default Hotels
