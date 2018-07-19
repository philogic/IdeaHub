import React from 'react';
import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import firebase from "firebase";
import config from "./config";
import AppNavigator from "./src/navigation";
import KeyboardDismiss from "./src/components/KeyboardDismiss"
import reducers from "./src/reducers";


export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config);
  };
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
        <KeyboardDismiss>
          <AppNavigator/>
        </KeyboardDismiss>
      </Provider>
    );
  }
}

