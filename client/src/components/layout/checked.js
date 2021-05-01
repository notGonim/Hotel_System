import React from 'react'

export const Confirmed = () => {
    return (
        <div className="container text-center p-5" >
            <h2 className="p-5">Your Order has been placed successfully.</h2>
            <img src={process.env.PUBLIC_URL + '/success.png'} className="rounded mx-auto d-block" style={{ width: "20rem" }} />

        </div>
    )
}
