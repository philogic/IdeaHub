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
              title="Submit"
              backgroundColor="#3bd3d4"
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




export default connect(mapStateToProps, {ideaInputChange, createIdea})(AddIdea);