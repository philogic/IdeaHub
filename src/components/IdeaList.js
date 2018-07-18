import React, {Component} from "react";
import {List, ListItem} from "react-native-elements";

class IdeaList extends Component {
  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <ListItem title="A title" leftIcon={{name: "lightbulb-outline"}}/>
        <ListItem title="A title" leftIcon={{name: "lightbulb-outline"}}/>
        <ListItem title="A title" leftIcon={{name: "lightbulb-outline"}}/>
        <ListItem title="A title" leftIcon={{name: "lightbulb-outline"}}/>
        <ListItem title="A title" leftIcon={{name: "lightbulb-outline"}}/>
      </List>
    )
  }
}

export default IdeaList;