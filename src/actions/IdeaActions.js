import firebase from "firebase";
import {IDEA_INPUT_CHANGE, NEW_IDEA, FETCH_IDEAS} from "./types";

export const ideaInputChange = ({field, value}) => {
  return {
    type: IDEA_INPUT_CHANGE,
    payload: {field, value}
  }
};

export const createIdea = ({subject, idea}) => {
  const {uid} = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/userIdeas/${uid}/ideas`)
      .push({subject, idea})
      .then(() => dispatch({type: NEW_IDEA}))
  }
};

export const fetchIdeas = () => {
  const {uid} = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/userIdeas/${uid}/ideas`)
      .on("value", (snapshot) => {
        dispatch({type: FETCH_IDEAS, payload: snapshot.val()})
      })
  }
};