import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Header from "../components/Header";
import Question from "../components/Question";
import Choice from "../components/Choice";
import color from "../constants/color";
import Result from "../components/Result";

export default class MainScreen extends Component {
  state = {
    isStarted: false,
    isDone: false
  };
  render() {
    const { isStarted, isDone } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Header />
        {!isStarted ? (//Not started
          <View style={styles.startContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._start}
            >
              <Text style={styles.button}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        ) : !isDone ? (//started, but not done yet
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.container}
          >
            <Question />
            <Choice />
            <Choice />
            <Choice />
            <Choice />
          </ScrollView>
        ) : ( // done
          <Result />
        )}
      </View>
    );
  }
  _start = () => {
    this.setState({
      isStarted: true,
      isDone: true
    });
  };
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: color.grey
  },
  container: {
    flex: 1,
    backgroundColor: color.grey,
    alignItems: "center"
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
  mainContainer: {
    flex: 1
  },
  startContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
