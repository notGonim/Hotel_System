import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className="nav bg-dark d-flex justify-content-between ">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/login' className='nav-link'> LogIn</Link>
            <Link to='/register' className='nav-link'> Register</Link>
        </div>
    )
}
