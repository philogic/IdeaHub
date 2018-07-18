import React, {Component} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {Button, FormLabel, FormInput, FormValidationMessage} from "react-native-elements";
import {connect} from "react-redux";
import firebase from "firebase";
import {authInputChange, login} from "../actions/AuthActions";

class LoginForm extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDiW3ZxG3w77IOdusSHxv31sTLMoi-5Nlo",
      authDomain: "authentication-1c525.firebaseapp.com",
      databaseURL: "https://authentication-1c525.firebaseio.com",
      projectId: "authentication-1c525",
      storageBucket: "authentication-1c525.appspot.com",
      messagingSenderId: "877498223234"
    };
    firebase.initializeApp(config);
  };
  onButtonPress() {
    const {email, password} = this.props;
    this.props.login({email, password})
  };

  displayButtonOrSpinner() {
    if (this.props.isLoading) {
      return (
        <View>
          <ActivityIndicator size="small"/>
        </View>
      );
    }
    return (
      <Button
        title="Login"
        backgroundColor="#3bd3d4"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  };

  displayErrorOrConfirm() {
    if (this.props.error) {
      return (
        <FormValidationMessage>{this.props.error}</FormValidationMessage>
      )
    }
  }

  render() {
    return (
      <View style={styles.formStyle}>
        <View style={styles.sectionStyle}>
          <FormLabel>Email</FormLabel>
          <FormInput
            value={this.props.email}
            placeholder="Email"
            onChangeText={text => this.props.authInputChange({"field": "email", "value": text})}/>
        </View>
        <View style={styles.sectionStyle}>
          <FormLabel>Password</FormLabel>
          <FormInput
            value={this.props.password}
            placeholder="Password"
            secureTextEntry
            onChangeText={text => this.props.authInputChange({"field": "password", "value": text})}/>
        </View>
        <View style={styles.sectionStyle}>
          {this.displayErrorOrConfirm()}
        </View>
        <View style={styles.sectionStyle}>
          {this.displayButtonOrSpinner()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    isLoading: state.auth.isLoading,
    user: state.auth.user,
    error: state.auth.error
  }
};

const styles = {
  formStyle: {
    marginTop: 60
  },
  sectionStyle: {
    marginTop: 10,
    marginBottom: 10
  }
};


export default connect(mapStateToProps, {authInputChange, login})(LoginForm);