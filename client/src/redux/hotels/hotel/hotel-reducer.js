
const INITIAL_STATE = {
    hotel: {}
}



const HotelReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {

        case 'HOTEL_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'HOTEL_DETAILS_FAIL':
            return {
                ...state,
                error: action.payload
            };
        case 'HOTEL_DETAILS_SUCCESS':
            return {
                loading: false,
                hotel: actions.payload
            };
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}


export default HotelReducer