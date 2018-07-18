import React from "react";
import {View, Text} from "react-native";

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {props.title}
      </Text>
    </View>
  )
};

const styles = {
  headerContainer: {
    backgroundColor: "#fafbfc",
    paddingTop: 24,
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 2
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 13
  }
};

export {Header};