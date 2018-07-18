import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer"
import IdeaReducer from "./IdeaReducer"

export default combineReducers({
  authred: AuthReducer,
  ideared: IdeaReducer
})