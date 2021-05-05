import axios from 'axios'


export const getHotelDetails=(id)=>async(dispatch)=>{
try{
    dispatch({
        type: "HOTEL_DETAILS_REQUEST",
    })

    



}catch(err){
    dispatch({
        type: "HOTEL_DETAILS_FAIL",
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