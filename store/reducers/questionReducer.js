import {
  GET_QUESTION,
  TOGGLE_IS_START,
  TOGGLE_IS_DONE,
  NEXT_QUIZ,
  ANSWER_QUIZ,
  BACK_QUIZ
} from "../actionType";

const initState = {
  isStarted: false,
  isDone: false,
  questions: [],
  userAnswers: [],
  currentQuestionNo: 0
};

const questionReducer = (state = initState, action) => {
  const { isStarted, isDone } = state;
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        questions: action.payload.questions,
        userAnswers: action.payload.questions.map(item => {
          return {
            quizId: item.quizId,
            choose: ''
          }
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
      return {
        ...state,
        userAnswers: userAnswers.map(item => {
          return item.quizId === payload.answer.quizId ? payload.answer : item
          
        })
      };
    default:
      return state;
  }
};

export default questionReducer;
