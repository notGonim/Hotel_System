import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { login } from '../../redux/auth/user-actions';
import { Nav } from '../layout/Nav';



export const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const history = useHistory()

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    useEffect(() => {

        if (isAuthenticated) {
            history.push('/home')
        }
    }, [dispatch, isAuthenticated, error, history])


    const onHandleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email,password))

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
                            <label >Email : </label>
                            <input type="email" value={email} className="form-control" placeholder="Write Your Email" onChange={(e) => setEmail(e.target.value)} />
                            <label >Password : </label>
                            <input type="password" value={password} className="form-control" placeholder="Write Your Password " onChange={(e) => setPassword(e.target.value)} />
                            {error &&
                                <div class="alert alert-danger m-1"  >{error}</div>
                            }

                            <button className="btn btn-outline-success mt-3" onClick={onHandleLogin}>Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
