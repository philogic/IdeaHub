import React from 'react';
import { View } from 'react-native';
import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import firebase from "firebase";
import config from "./config"
import LoginForm from "./src/components/LoginForm";
import KeyboardDismiss from "./src/components/KeyboardDismiss"
import {Header} from "./src/components/shared";
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
          <View>
            <Header title="Please Login"/>
            <LoginForm/>
          </View>
        </KeyboardDismiss>
      </Provider>
    );
  }
}

