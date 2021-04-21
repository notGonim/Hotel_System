import { combineReducers } from "redux";
import UserReducer from "./auth/user-reducer";




const rootReducer = combineReducers({
    auth: UserReducer
})



export default rootReducer