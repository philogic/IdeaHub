import React, {Component} from "react";
import {View, ActivityIndicator} from "react-native";
import {Button, FormLabel, FormInput, FormValidationMessage} from "react-native-elements";
import {connect} from "react-redux";
import {authInputChange, login} from "../actions/AuthActions";

class IdeaForm extends Component {
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
        title="Submit"
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
          <FormLabel>Subject</FormLabel>
          <FormInput
            value={this.props.subject}
            placeholder="Subject"
            onChangeText={text => this.props.authInputChange({"field": "subject", "value": text})}/>
        </View>
        <View style={styles.sectionStyle}>
          <FormLabel>Idea</FormLabel>
          <FormInput
            multiline={true}
            inputStyle={{height: 200}}
            value={this.props.idea}
            placeholder="Put your idea here!"
            onChangeText={text => this.props.authInputChange({"field": "idea", "value": text})}/>
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


export default connect(mapStateToProps, {authInputChange, login})(IdeaForm);