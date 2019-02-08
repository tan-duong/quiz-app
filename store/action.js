import { getQuizFromTrivia } from "../func/main";
import {
  GET_QUESTION,
  TOGGLE_IS_DONE,
  TOGGLE_IS_START,
  NEXT_QUIZ,
  BACK_QUIZ,
  ANSWER_QUIZ,
  CALCULATE_RESULT,
  INTERVAL
} from "./actionType";

export const getQuiz = async () => {
  const data = await getQuizFromTrivia();

  return {
    type: GET_QUESTION,
    payload: {
      questions: data
    }
  };
};

export const nextQuiz = () => {
  return {
    type: NEXT_QUIZ,
    payload: {}
  };
};

export const backQuiz = () => {
  return {
    type: BACK_QUIZ,
    payload: {}
  };
};

export const answerQuiz = (quiz, choose, isRight) => {
  return {
    type: ANSWER_QUIZ,
    payload: {
      answer: {
        quizId: quiz,
        choose: choose,
        isRight: isRight
      }
    }
  };
};

export const calculateResult = answers => {
  let point = 0;

  answers.forEach(element => {
    if (element.isRight) point++;
  });

  return {
    type: CALCULATE_RESULT,
    payload: {
      point: point
    }
  };
};

export const timerTick = () => {
    
    return {
      type: INTERVAL,
      payload: {}
      
    };
  };
