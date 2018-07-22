import React, {Component} from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
import {connect} from "react-redux";
import _ from "lodash";
import IdeaForm from "./IdeaForm";
import {ideaInputChange, editIdea} from "../actions";

class EditIdea extends Component {
  componentDidMount() {
    const {params} = this.props.navigation.state;
    _.each(params.idea, (value, field) => {
      this.props.ideaInputChange({field, value})
    });
  };

  onButtonPress() {
    const {id} = this.props.navigation.state.params.idea;
    const {subject, idea} = this.props;
    this.props.editIdea({subject, idea, id});
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
        <IdeaForm {...this.props}/>
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


export default connect(mapStateToProps, {ideaInputChange, editIdea})(EditIdea);