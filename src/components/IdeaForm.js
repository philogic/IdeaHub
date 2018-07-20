import React, {Component} from "react";
import {View, ActivityIndicator, Keyboard} from "react-native";
import {Button, FormLabel, FormInput} from "react-native-elements";
import {connect} from "react-redux";
import {ideaInputChange, createIdea} from "../actions";

class IdeaForm extends Component {
  onButtonPress() {
    const {subject, idea} = this.props;
    this.props.createIdea({subject, idea});
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

  render() {
    return (
      <View style={styles.formStyle}>
        <View style={styles.sectionStyle}>
          <FormLabel>Subject</FormLabel>
          <FormInput
            value={this.props.subject}
            placeholder="Subject"
            onChangeText={text => this.props.ideaInputChange({"field": "subject", "value": text})}
          />
        </View>
        <View style={styles.sectionStyle}>
          <FormLabel>Idea</FormLabel>
          <FormInput
            multiline={true}
            inputStyle={{height: 200}}
            value={this.props.idea}
            placeholder="Put your idea here!"
            onChangeText={text => this.props.ideaInputChange({"field": "idea", "value": text})}
          />

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
    subject: state.ideacreatred.subject,
    idea: state.ideacreatred.idea
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


export default connect(mapStateToProps, {ideaInputChange, createIdea})(IdeaForm);