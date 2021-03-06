import {
  IDEA_INPUT_CHANGE,
  NEW_IDEA,
  EDIT_IDEA,
  DELETE_IDEA
} from "../actions/types"

const INIT_STATE = {
  subject: "",
  idea: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case IDEA_INPUT_CHANGE:
      return {...state, [action.payload.field]: action.payload.value};
    case  NEW_IDEA:
      return INIT_STATE;
    case EDIT_IDEA:
      return INIT_STATE;
    case DELETE_IDEA:
      return INIT_STATE;
    default:
      return state
  }
}