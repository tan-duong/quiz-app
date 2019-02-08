import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import color from "../constants/color";
import { Constants } from "expo";
import { MAX_QUIZ_NO } from "../constants/app";
import {secondsToHms} from '../func/main'
export default class Header extends Component {
  static propTypes = {
    currentNo: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired
  };

  render() {
    const { currentNo, interval } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Ionicons name="md-checkmark-circle" size={40} color={color.white} />{" "}
          Quiz App
        </Text>
        <View style={styles.timerPanel}>
          <Text
            style={styles.text}
          >{`Question: ${currentNo}/${MAX_QUIZ_NO}`}</Text>
          <Text style={styles.text}>
            Total time: {secondsToHms(interval)}
          </Text>
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
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: color.white
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.white
  },
  timerPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10
  }
});
