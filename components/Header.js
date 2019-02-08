import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import color from "../constants/color";
import { Constants } from "expo";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={styles.container}>
     
          <Text style={styles.title}><Ionicons name="md-checkmark-circle" size={40} color={color.white} /> Quiz App</Text>
          <View style={styles.timerPanel}>
            <Text style={styles.text}>Question: 4/10</Text>
            <Text style={styles.text}>Total time: 0:23</Text>
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.green,
    padding: Constants.statusBarHeight,
    width: "100%",
    alignItems: "center",
    
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: color.white,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.white
  },
  timerPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10
  }
});
