import axios from 'axios'




export const getHotels = () => async (dispatch) => {
    try {
        dispatch({
            type: "ALL_HOTEL_REQUEST"
        })
        const { data } = await axios.get('/api/all')
        dispatch({
            type: "ALL_HOTEL_SUCCESS",
            payload: data
        })

    } catch (err) {
        dispatch({
            type: "ALL_HOTEL_FAIL",
            payload: err.response.data.message
        })
    }
}



//clearing errors 

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_ERRORS",
    })
}