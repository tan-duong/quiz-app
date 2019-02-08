import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import color from "../constants/color";

import { Ionicons } from "@expo/vector-icons";

export default class Result extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.resultContainer}>
            <Text style={styles.text}>
              <Ionicons
                name="md-checkmark-circle"
                size={40}
                color={color.green}
              />{" "}
              Right
            </Text>
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.text}>
              <Ionicons
                name="md-checkmark-circle"
                size={40}
                color={color.red}
              />{" "}
              Wrong
            </Text>
            <Text style={styles.text}>5</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={this._start}>
          <Text style={styles.button}>Play Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.grey
  },
  text: {
    fontSize: 40
  },
  buttonContainer: {
    backgroundColor: color.orange,
    width: "60%",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 8
  },
  button: {
    fontSize: 30,
    color: color.white,
    fontWeight: "bold"
  },
  subContainer: {
    backgroundColor: color.white,
    width: "70%",
    //alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: color.yellow,
    marginTop: 20,
    marginBottom: 50,
    padding: 10
  },
  resultContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  }
});
