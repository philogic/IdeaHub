import React, {Component} from "react";
import {View} from "react-native";
import {FormLabel, FormInput} from "react-native-elements";
import {connect} from "react-redux";
import styles from "../../styles";
import {ideaInputChange} from "../actions";

class IdeaForm extends Component {
  render() {
    return (
      <View>
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


export default connect(mapStateToProps, {ideaInputChange})(IdeaForm);