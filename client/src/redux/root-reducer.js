import { combineReducers } from "redux";
import UserReducer, { ProfileReducer } from "./auth/user-reducer";
import HotelReducer from "./hotels/hotels-reducers";




const rootReducer = combineReducers({
    auth: UserReducer,
    hotels: HotelReducer,
    edit: ProfileReducer
})



export default rootReducer