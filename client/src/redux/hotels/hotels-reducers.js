
const INITIAL_STATE = {
    hotels: {}
}


const HotelReducer = (state = INITIAL_STATE, actions) => {


    switch (actions.type) {

        case 'ALL_HOTEL_REQUEST':
            return {
                loading: true,
                hotels: []
            };
        case 'ALL_HOTEL_SUCCESS':
            return {
                loading: false,
                hotels: actions.payload.hotels
            };
        case 'ALL_HOTEL_FAIL':
            return {
                loading: false,
                error: actions.payload
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