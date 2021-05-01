import React, { useState } from 'react'

export const AddHotel = () => {


    const [hotelName, setHotelName] = useState('')
    const [rooms, setRooms] = useState(0)
    const [url, setUrl] = useState('')



    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1> Add Hotel</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-group mb-3">
                            <label >Hotel Name : </label>
                            <input type="text" value={hotelName} className="form-control" placeholder="Add Hotel`s name" onChange={(e) => setHotelName(e.target.value)} />
                            <label >Number Of Rooms Available : </label>
                            <input type="number" value={rooms} className="form-control" placeholder="# of rooms available " onChange={(e) => setRooms(e.target.value)} />
                            <label >Pic URL  : </label>
                            <input type="text" value={url} className="form-control" placeholder="Add Hotel`s Pic Url " onChange={(e) => setUrl(e.target.value)} />

                            {/*error &&
                                <div class="alert alert-danger m-1"  >{error}</div>
                            */}

                            <button className="btn btn-outline-success mt-3" >Add Hotel</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
