import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer"
import IdeaCreationReducer from "./IdeaCreationReducer"
import IdeasListReducer from "./IdeasListReducer";

export default combineReducers({
  authred: AuthReducer,
  ideacreatred: IdeaCreationReducer,
  idealistred: IdeasListReducer
})