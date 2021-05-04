import axios from 'axios'

//register func to handle register req to =>   api/register 
export const register = (userData) => async (dispatch) => {

    try {

        dispatch({ type: "REGISTER_REQUEST" })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/register', userData, config)

        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data.user
        })

    } catch (err) {
        dispatch({
            type: "REGISTER_FAIL",
            payload: err.response.data.error.message
        })
    }
}



//login func to handle user login     api/login
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: "LOGIN_REQUEST" })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/login', { email, password }, config)
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.user
        })


    } catch (err) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: err.response.data.error.message
        })
    }
}

export const logout = () => async dispatch => {
    try {
        await axios.get('/api/logout')
        dispatch({
            type: "LOGOUT_SUCCESS",
        })
    } catch (err) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: err.response.data.error.message
        })
    }
}
//clearing errors not gunna use it coz i am gonna handle errors 

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_ERRORS",
    })
}