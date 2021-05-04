import React from 'react'
import { Footer } from '../layout/Footer'
import { HotelCard } from './HotelCard'
import { MainHeader } from '../layout/header'

export const Hotel = () => {
    return (
        <>
            <MainHeader />
            <div className="container p-3">
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </div>
            <br />
            <Footer />
        </>
    )
}
