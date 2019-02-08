import { GET_QUESTION, TOGGLE_IS_START, TOGGLE_IS_DONE } from "../actionType";

const initState = {
  isStarted: false,
  isDone: false,
  questions: []
};

const questionReducer = (state = initState, action) => {
  const { isStarted, isDone } = state;
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        questions: action.payload.questions
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
    default:
      return state;
  }
};

export default questionReducer;
