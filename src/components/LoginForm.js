import React, {Component} from "react";
import {View, ActivityIndicator} from "react-native";
import {Button, FormLabel, FormInput, FormValidationMessage} from "react-native-elements";
import {connect} from "react-redux";
import _ from "lodash";
import {authInputChange, login} from "../actions";
import styles from "../../styles"

class LoginForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.user)) {
      this.props.navigation.navigate("App")
    }
  }

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
            placeholder="email"
            onChangeText={text => this.props.authInputChange({"field": "email", "value": text})}/>
        </View>
        <View style={styles.sectionStyle}>
          <FormLabel>Password</FormLabel>
          <FormInput
            value={this.props.password}
            placeholder="password"
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
    email: state.authred.email,
    password: state.authred.password,
    isLoading: state.authred.isLoading,
    user: state.authred.user,
    error: state.authred.error
  }
};

export default connect(mapStateToProps, {authInputChange, login})(LoginForm);