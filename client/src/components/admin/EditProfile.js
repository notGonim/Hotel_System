import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { editProfile, loadUser } from '../../redux/auth/user-actions'
import { MainHeader } from '../layout/header'
import { Loader } from '../layout/Loader'

export const EditProfile = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()

    const { error, isUpdated, loading } = useSelector(state => state.edit)
    const { user } = useSelector(state => state.auth);


    useEffect(() => {

        if (user) {
            setUsername(user.username);
            setEmail(user.email);
        }


        if (isUpdated) {
            history.push('/profile')

            dispatch(loadUser())
            dispatch({
                type: "UPDATE_PROFILE_RESET"
            })
        }

    }, [dispatch, isUpdated, loading, error, user])

    const onEditData = (e) => {

        e.preventDefault();
        const data = { username, email }
        dispatch(editProfile(data))

    }

    return (
        <>
            <MainHeader />
            {loading ? <Loader />
                :
                <>
                    <div className="container-fluid bg-secondary p-5 text-center">
                        <h1> Edit Your Info</h1>
                    </div>
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="form-group mb-3">
                                    <label >Your New Username : </label>
                                    <input type="text" value={username} className="form-control" placeholder="Write Your Username" onChange={(e) => setUsername(e.target.value)} />
                                    <label >Your New Email : </label>
                                    <input type="email" value={email} className="form-control" placeholder="Write Your Email" onChange={(e) => setEmail(e.target.value)} />
                                    <button className="btn btn-outline-success mt-3" onClick={onEditData}>Edit </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </>}
        </>
    )
}
