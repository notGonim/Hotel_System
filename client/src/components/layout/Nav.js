import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >HotelMe</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                <div className="">
                </div>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <div className="">
                    <Link to="/login" className="btn btn-outline-primary mr-1">Sign In</Link>
                    <Link to="/register" className="btn btn-outline-success">Register</Link>
                </div>
            </div>
        </nav>
    )
}


