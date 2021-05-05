import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MainHeader } from '../layout/header'
import { Loader } from '../layout/Loader'

export const Profile = () => {

    const { user, loading, isAuthenticated, error } = useSelector(state => state.auth)


    return (
        <>
            <MainHeader />
            {loading ? <Loader />
                :
                <div className="container mt-3 mb-3">
                    <h1 className="dispay-2">Your Info</h1>
                    <div className="container p-3">
                        <h2 className="dispaly-1">Username  </h2>
                        <h4 className="dispaly-2 p-2">{user.username} </h4>
                        <hr />
                        <h2 className="dispaly-3">Email  </h2>
                        <h4 className="dispaly-4 p-2">{user.email}</h4>
                        <br />
                        <br />
                        <Link to="/editprofile" >Edit Your Info</Link>
                        <br />
                        <br />

                    </div>
                </div>


            }</>
    )
}
