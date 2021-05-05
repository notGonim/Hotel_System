import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, register } from '../../redux/auth/user-actions'

import { useHistory } from "react-router-dom";
import { Nav } from '../layout/Nav';



export const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch();
    const history = useHistory()
    const { isAuthenticated, error, loading ,user} = useSelector(state => state.auth);
    useEffect(() => {

        if (isAuthenticated) {
            history.push('/home')
        }
    }, [dispatch, isAuthenticated, error, history])


    const onHandleSubmit = async (e) => {
        e.preventDefault()
        const userData = { username, email, password }
        dispatch(register(userData))

    }

    return (
        <>
                <Nav/>

            <div className="container-fluid bg-secondary p-5 text-center">
                <h1> Register</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-group mb-3">
                            <label >Username : </label>
                            <input type="text" value={username} className="form-control" placeholder="Write Your Username" onChange={(e) => setUsername(e.target.value)} />
                            <label >Email : </label>
                            <input type="email" value={email} className="form-control" placeholder="Write Your Email" onChange={(e) => setEmail(e.target.value)} />
                            <label >Password : </label>
                            <input type="password" value={password} className="form-control" placeholder="Write Your Password " onChange={(e) => setPassword(e.target.value)} />
                            {error &&
                                <div class="alert alert-danger m-1"  >{error}</div>
                            }

                            <button className="btn btn-outline-primary mt-3" onClick={onHandleSubmit}>Register</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
