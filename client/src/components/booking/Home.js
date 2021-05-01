import React from 'react'
import { AddHotel } from '../admin/AddHotel'
import { HotelCard } from '../hotels/HotelCard'

export const Home = () => {
    return (
        <div className="container-fluid  p-1">
            <AddHotel />
        </div>
    )
}
