import firebase from "firebase";
import {
  IDEA_INPUT_CHANGE,
  FETCH_IDEAS,
  NEW_IDEA,
  EDIT_IDEA,
  DELETE_IDEA
} from "./types";

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

export const editIdea = ({subject, idea, id}) => {
  const {uid} = firebase.auth().currentUser;
  return (dispatch => {
    firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
      .set({subject, idea})
      .then(() => dispatch({type: EDIT_IDEA}))
  })
};

export const removeIdea = ({id}) => {
  const {uid} = firebase.auth().currentUser;
  return (dispatch => {
    firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
      .remove()
      .then(() => dispatch({type: DELETE_IDEA}))
  })
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