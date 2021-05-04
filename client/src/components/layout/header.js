import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/auth/user-actions'
import { useDispatch} from 'react-redux'

export const MainHeader = () => {

    const dispatch = useDispatch()
    const loggedOut = () => {
        dispatch(logout())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand" >HotelMe</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <div className="">
                    </div>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/profile" className="nav-link" >Profile <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/add" className="nav-link" >Add Hotel <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <div className="">
                    <Link to="/" className="btn btn-outline-danger mr-1" onClick={loggedOut}>Log Out</Link>
                </div>

            </div>
        </nav>
    )
}
