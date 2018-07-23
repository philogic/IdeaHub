import React, {Component} from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
import {connect} from "react-redux";
import _ from "lodash";
import styles from "../../styles"
import IdeaForm from "./IdeaForm";
import {ideaInputChange, editIdea, removeIdea} from "../actions";

class EditIdea extends Component {
  componentDidMount() {
    const {params} = this.props.navigation.state;
    _.each(params.idea, (value, field) => {
      this.props.ideaInputChange({field, value})
    });
  };

  update() {
    const {id} = this.props.navigation.state.params.idea;
    const {subject, idea} = this.props;
    this.props.editIdea({subject, idea, id});
    this.props.navigation.navigate("Ideas");
  };

  delete() {
    const {id} = this.props.navigation.state.params.idea;
    this.props.removeIdea({id});
    this.props.navigation.navigate("Ideas");
  };

  render() {
    return (
      <View style={styles.formStyle}>
        <View style={styles.sectionStyle}>
          return (
          <Button
            title="Save"
            backgroundColor="blue"
            onPress={this.update.bind(this)}
          />
        </View>
        <View style={styles.sectionStyle}>
          return (
          <Button
            title="Delete"
            backgroundColor="red"
            onPress={this.delete.bind(this)}
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


export default connect(mapStateToProps, {ideaInputChange, editIdea, removeIdea})(EditIdea);