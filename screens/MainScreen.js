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
import {connect} from 'react-redux'
import {toggleIsStarted, toggleIsDone, getQuiz, nextQuiz, backQuiz, answerQuiz} from '../store/action'
import {MAX_QUIZ_NO} from '../constants/app'

class MainScreen extends Component {
  componentDidMount(){
    this.props.getQuiz()
    console.log(this.props.questions)
  }

  render() {
    const { isStarted, isDone, currentQuestionNo, questions, userAnswers } = this.props;

    const quiz = questions[currentQuestionNo]
    const answer = userAnswers[currentQuestionNo]

    return (
      <View style={styles.mainContainer}>
        <Header />
        {(currentQuestionNo == 0) ? (//Not started
          <View style={styles.startContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._start}
            >
              <Text style={styles.button}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        ) : (currentQuestionNo <= MAX_QUIZ_NO) ? (//started, but not done yet
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.container}
          >
          
            <Question question={quiz.question}/>
            {
              quiz.answers.map(item => {
                const isSelected = false
                if(item === answer.choose ) 
                  isSelected = true

                reutrn (
                  <Choice isSelected text={item} choose={this._choose.bind(this, quizId, item)}/>
                )
              })
            }

          <View style={styles.startContainer}>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._back}
            >
              <Text style={styles.button}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._next}
            >
              <Text style={styles.button}>Next</Text>
            </TouchableOpacity>
          </View>
         
          </ScrollView>
        ) : ( // done
          <Result />
        )}
      </View>
    );
  }
  _start = () => {
    const {nextQuiz} = this.props
    nextQuiz()
  };

  _choose = (quizId, item) => {
    const {answerQuiz} = this.props
    answerQuiz(quizId, item)
  }

  _back = () => {
    const {backQuiz} = this.props
    backQuiz()
  }

  _next = () => {
    const {nextQuiz} = this.props
    if (currentQuestionNo < MAX_QUIZ_NO)
      nextQuiz()
    else
      
  }
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

const mapState = (state) => {
  return {
    isStarted: state.question.isStarted,
    isDone: state.question.isDone,
    questions: state.question.questions,
    currentQuestionNo: state.question.currentQuestionNo,
    userAnswers: state.question.userAnswers,
  }
  
}

const actionCreator = {
  toggleIsStarted,
  toggleIsDone,
  getQuiz,
  nextQuiz,
  backQuiz,
  answerQuiz,
}

export default connect(mapState, actionCreator)(MainScreen)