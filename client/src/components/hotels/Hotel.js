import React from 'react'
import { Footer } from '../layout/Footer'
import { HotelCard } from './HotelCard'
import { MainHeader } from '../layout/header'

export const Hotel = () => {
    return (
        <>
            <MainHeader />
            <div className="container p-3">

                <div className="row ">
                    <div className="col-sm mb-3">
                        <HotelCard />
                    </div>


                </div>
            </div>
            <br />
        </>
    )
}
