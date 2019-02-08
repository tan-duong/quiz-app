import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import color from "../constants/color";
import { MAX_QUIZ_NO } from "../constants/app";
import {secondsToHms} from '../func/main'
import { Ionicons } from "@expo/vector-icons";

export default class Result extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    answers: PropTypes.array.isRequired,
    point: PropTypes.number.isRequired,
    restart: PropTypes.func.isRequired,
    interval: PropTypes.number.isRequired,
  };

  render() {
    const { questions, answers, point, interval } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.resultContainer}>
            <Text style={styles.text}>
              <Ionicons
                name="md-checkmark-circle"
                size={32}
                color={color.green}
              />{" "}
              Correct:
            </Text>
            <Text style={styles.text}>{`${point}/${MAX_QUIZ_NO} quiz `}</Text>
            <Text style={styles.text}>{`in ${interval}s`}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._restart}
        >
          <Text style={styles.button}>Play Again</Text>
        </TouchableOpacity>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollPanel}
        >
          {questions.map((item, index) => {
            return (
              <View style={styles.quizContainer} key={index}>
                <Text style={styles.textQiz}>{item.question}</Text>
                <Text style={styles.textAnswer}>
                  Correct answer: {item.correct_answer}
                </Text>
                <Text style={styles.textAnswer}>
                  Your answer: {answers[index].choose}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  _restart = () => {
    this.props.restart();
  };

  
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: color.grey,
    width: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.grey
  },
  text: {
    fontSize: 32
  },
  buttonContainer: {
    backgroundColor: color.green,
    width: "60%",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  button: {
    fontSize: 30,
    color: color.white,
    fontWeight: "bold"
  },
  subContainer: {
    backgroundColor: color.white,
    width: "90%",
    //alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: color.yellow,
    marginTop: 20,
    padding: 10
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  quizContainer: {
    backgroundColor: color.white,
    width: "90%",
    borderWidth: 1,
    borderColor: color.grey,
    padding: 5
  },
  textQiz: {
    fontSize: 20,
    marginBottom: 10
  },
  textAnswer: {
    fontSize: 15,
    fontStyle: "italic"
  },
  scrollPanel: {
    alignItems: "center"
  }
});
