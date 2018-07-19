import React from "react";
import {Icon} from "react-native-elements";
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
    navigationOptions: ({navigation}) => {
      return {
        title: "Your Ideas",
        headerRight: (
          <Icon
            type="evilicon"
            name="plus"
            sixe={30}
            onPress={() => navigation.navigate("CreateIdea")}
            iconStyle={{padding: 10}}
          />
        ),
        headerLeft: null
      }

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