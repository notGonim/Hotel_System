import axios from 'axios'

//register func to handle register req to =>   api/register 
export const register = (userData) => async (dispatch) => {

    try {
        console.log(userData)


        dispatch({ type: "REGISTER_REQUEST" })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/register', userData, config)
        console.log(data)

        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data.user
        })

    } catch (e) {
        dispatch({
            type: "REGISTER_FAIL",
            payload: e.response.data.message
        })
    }
}



//clearing errors 

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_ERRORS",
    })
}