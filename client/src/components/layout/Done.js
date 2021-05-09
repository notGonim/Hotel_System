import React from 'react'
import { Link } from 'react-router-dom'
import { MainHeader } from '../layout/header'

export const Done = () => {
    return (
        <>
        <MainHeader/>
        <div className="container p-5 text-center">
                 <img className="my-5 img-fluid d-block mx-auto" src="https://www.clipartmax.com/png/middle/423-4232339_checklist-circle-done-check-vector-png.png" alt="Order Success" width="200" height="200" />

                 <h2>Your Order has been placed successfully.</h2>

                 <Link to="/home">Your Book Not handle yet</Link>
             
         </div>
     </>
    )
}
