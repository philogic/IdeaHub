import React from "react";
import {createStackNavigator, createSwitchNavigator} from "react-navigation";
import LoginForm from "./components/LoginForm";
import IdeaForm from "./components/IdeaForm";
import IdeaList from "./components/IdeaList";

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: "Please Login"
    }
  }
});

const AppStack = createStackNavigator({
  Ideas: {
    screen: IdeaList,
    navigationOptions: {
      title: "Your Ideas"
    }
  },
  CreateIdea: {
    screen: IdeaForm,
    navigationOptions: {
      title: "Create Your Idea"
    }
  }
});

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Auth"
  }
);