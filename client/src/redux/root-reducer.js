import { combineReducers } from "redux";
import UserReducer from "./auth/user-reducer";




const rootReducer = combineReducers({
    user: UserReducer
})



export default rootReducer