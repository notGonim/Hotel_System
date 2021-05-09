import React, { useEffect } from 'react'
import { Footer } from '../layout/Footer'
import { HotelCard } from './HotelCard'
import { MainHeader } from '../layout/header'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../layout/Loader'
import { getHotels } from '../../redux/hotels/hotels-actions'

export const Hotel = () => {


    const { hotels, error, loading } = useSelector(state => state.hotels);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotels())
    }, [dispatch, error])

    return (
        <>
            <MainHeader />

            {loading ?
                <Loader />
                :
                <div className="container p-3">

                    <div className="row ">
                        <div className="col-sm mb-3">
                            <HotelCard id="123" key="123" title="Testing title" img="https://badianhotel.com/wp-content/uploads/2020/08/baglioni-hotel-london.jpg" desc="Some quick example text to build on the card title and make up the bulk of the card's content."
                            />
                        </div>
                    </div>
                </div>
            }
            <br />
        </>
    )
}
