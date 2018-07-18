import firebase from "firebase";
import {
  AUTH_INPUT_CHANGE,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_BEGIN
} from "./types";

export const authInputChange = ({field, value}) => {
  return {
    type: AUTH_INPUT_CHANGE,
    payload: {field, value}
  }
};

export const login = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: AUTH_BEGIN});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => authUserSuccess(dispatch, user))
      .catch(() => {authUserFail(dispatch)})
  }
};

export const authUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_SUCCESS,
    payload: user
  })
};

export const authUserFail = dispatch => {
  dispatch({
    type: AUTH_FAILURE
  })
};