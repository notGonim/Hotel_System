import React from 'react'
import { Link } from 'react-router-dom'

export const CarsorWidget = () => {
    return (

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Why HotelME ???</h1>
                <p class="lead">Well we have more than 1000 hotels of the best in the world.</p>
                <Link to='/register' className="btn btn-outline-success">Join Us</Link>
            </div>
        </div>
    )
}
