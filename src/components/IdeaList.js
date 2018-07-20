import React, {Component} from "react";
import {List, ListItem} from "react-native-elements";
import {connect} from "react-redux";
import {fetchIdeas} from "../actions/IdeaActions";
import _ from "lodash";

class IdeaList extends Component {
  componentDidMount() {
    this.props.fetchIdeas();
  };

  displayIdeas() {
    return this.props.ideas.map((idea) => {
      return (
        <ListItem
          key={idea.id}
          title={idea.subject}
          leftIcon={{name: "lightbulb-outline"}}
        />
      )
    })
  }
  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        {this.displayIdeas()}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const ideas = _.map(state.idealistred, (val, id) => {
    val["id"] = id;
    return val
  })

  return {ideas};
};

export default connect(mapStateToProps, {fetchIdeas})(IdeaList);