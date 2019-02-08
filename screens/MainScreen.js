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
import { connect } from "react-redux";
import {
  toggleIsStarted,
  toggleIsDone,
  getQuiz,
  nextQuiz,
  backQuiz,
  answerQuiz,
  calculateResult,
  timerTick
} from "../store/action";
import { MAX_QUIZ_NO } from "../constants/app";
import timer from "react-native-timer";
import { AppLoading } from 'expo';

class MainScreen extends Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    await this.props.getQuiz();
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
      );
    }

    const {
      currentQuestionNo,
      questions,
      userAnswers,
      point,
      interval
    } = this.props;

    const quiz = questions[currentQuestionNo];
    const answer = userAnswers[currentQuestionNo];

    return (
      <View style={styles.mainContainer}>
        <Header currentNo={currentQuestionNo + 1} interval={interval} />
        {currentQuestionNo == -1 ? ( //Not started
          <View style={styles.startContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._start}
            >
              <Text style={styles.button}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        ) : currentQuestionNo <= MAX_QUIZ_NO - 1 &&
          quiz !== undefined &&
          point === -1 ? ( //started, but not done yet
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.container}
          >
            <Question question={quiz.question} />
            {quiz.answers.map((item, index) => {
              let isSelected = false;
              if (item === answer.choose) isSelected = true;

              return (
                <Choice
                  key={index}
                  isSelected={isSelected}
                  text={item}
                  choose={this._choose.bind(this, quiz, item)}
                />
              );
            })}

            <View style={styles.bottomPanel}>
              {currentQuestionNo !== 0 ? (
                <TouchableOpacity
                  style={styles.bottomButton}
                  onPress={this._back}
                >
                  <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
              ) : <Text> </Text>}

              <TouchableOpacity
                style={styles.bottomButton}
                onPress={this._next}
              >
                <Text style={styles.button}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          // done
          <Result
            interval={interval}
            questions={questions}
            answers={userAnswers}
            point={point}
            restart={() => {
              this.props.getQuiz();
            }}
          />
        )}
      </View>
    );
  }
  _start = () => {
    const { nextQuiz, timerTick } = this.props;
    
    timer.setInterval(
      this,
      "timer",
      () => {
        timerTick();
      },
      1000
    );
    nextQuiz();
  };

  _choose = (quiz, item) => {
    const { answerQuiz } = this.props;

    const isCorrect = quiz.correct_answer === item;
    answerQuiz(quiz.id, item, isCorrect);
  };

  _back = () => {
    const { backQuiz } = this.props;
    backQuiz();
  };

  _next = () => {
    const {
      nextQuiz,
      calculateResult,
      currentQuestionNo,
      userAnswers
    } = this.props;
    if (currentQuestionNo < MAX_QUIZ_NO - 1) nextQuiz();
    else {
      calculateResult(userAnswers);
      timer.clearInterval(this);
    }
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
    backgroundColor: color.green,
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
  },
  bottomPanel: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between"
  },
  bottomButton: {
    backgroundColor: color.green,
    width: "30%",
    alignItems: "center",
    padding: 10,
    marginTop: 40,
    borderRadius: 8
  }
});

const mapState = state => {
  return {
    questions: state.question.questions,
    currentQuestionNo: state.question.currentQuestionNo,
    userAnswers: state.question.userAnswers,
    point: state.question.point,
    interval: state.question.interval
  };
};

const actionCreator = {
  getQuiz,
  nextQuiz,
  backQuiz,
  answerQuiz,
  calculateResult,
  timerTick
};

export default connect(
  mapState,
  actionCreator
)(MainScreen);
