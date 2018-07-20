import {FETCH_IDEAS} from "../actions/types"

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_IDEAS:
      return action.payload;
    default:
      return state
  }
}