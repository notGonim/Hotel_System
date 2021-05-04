import { combineReducers } from "redux";
import UserReducer from "./auth/user-reducer";
import HotelReducer from "./hotels/hotels-reducers";




const rootReducer = combineReducers({
    auth: UserReducer,
    hotels:HotelReducer
})



export default rootReducer