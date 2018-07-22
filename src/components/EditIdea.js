import React, {Component} from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
import {connect} from "react-redux";
import IdeaForm from "./IdeaForm";
import {ideaInputChange, createIdea} from "../actions";

class AddIdea extends Component {
  onButtonPress() {
    const {subject, idea} = this.props;
    this.props.createIdea({subject, idea});
  };

  render() {
    return (
      <View style={styles.formStyle}>
        <View style={styles.sectionStyle}>
          return (
          <Button
            title="Save"
            backgroundColor="blue"
            onPress={this.onButtonPress.bind(this)}
          />
        </View>
        <View style={styles.sectionStyle}>
          return (
          <Button
            title="Delete"
            backgroundColor="red"
            onPress={this.onButtonPress.bind(this)}
          />
        </View>
        <IdeaForm/>
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


export default connect(mapStateToProps, {ideaInputChange, createIdea})(AddIdea);