import {
  GET_QUESTION,
  TOGGLE_IS_START,
  TOGGLE_IS_DONE,
  NEXT_QUIZ,
  ANSWER_QUIZ,
  BACK_QUIZ,
  CALCULATE_RESULT,
  INTERVAL
} from "../actionType";

const initState = {
  questions: [],
  userAnswers: [],
  currentQuestionNo: -1,
  point: -1,
  interval: 0,
};

const questionReducer = (state = initState, action) => {
  const { isStarted, isDone } = state;
  switch (action.type) {
    case GET_QUESTION: //Initialize game
      return {
        ...state,
        currentQuestionNo: -1,
        point: -1,
        interval: 0,
        questions: action.payload.questions,
        userAnswers: action.payload.questions.map(item => {
          return {
            quizId: item.id,
            choose: "",
            isRight: false
          };
        })
      };
    case TOGGLE_IS_START:
      return {
        ...state,
        isStarted: !isStarted
      };
    case TOGGLE_IS_START:
      return {
        ...state,
        isDone: !isDone
      };
    case NEXT_QUIZ:
      return {
        ...state,
        currentQuestionNo: state.currentQuestionNo + 1
      };
    case BACK_QUIZ:
      return {
        ...state,
        currentQuestionNo: state.currentQuestionNo - 1
      };
    case ANSWER_QUIZ:
      const { answer } = action.payload;
      
      return {
        ...state,
        userAnswers: state.userAnswers.map(item => {
          return item.quizId === answer.quizId ? answer : item;
        })
      };
    case CALCULATE_RESULT:
      const { point } = action.payload;
      return {
        ...state,
        point: point
      };
    case INTERVAL:
     
      return {
        ...state,
        interval: state.interval + 1
      };
    default:
      return state;
  }
};

export default questionReducer;
