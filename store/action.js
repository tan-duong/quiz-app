import {getQuizFromTrivia} from '../func/main'
import {GET_QUESTION,TOGGLE_IS_DONE,TOGGLE_IS_START, NEXT_QUIZ, BACK_QUIZ, ANSWER_QUIZ} from './actionType'

export const getQuiz = async () => {
    const data = await getQuizFromTrivia()

    return {
        type: GET_QUESTION,
        payload: {
            questions: data
        }
    }
}

export const toggleIsStarted = () => {
    return {
        type: TOGGLE_IS_START,
        payload: {}
    }
}

export const toggleIsDone = () => {
    return {
        type: TOGGLE_IS_DONE,
        payload: {}
    }
}

export const nextQuiz = () => {
    return {
        type: NEXT_QUIZ,
        payload: {}
    }
}

export const backQuiz = () => {
    return {
        type: BACK_QUIZ,
        payload: {}
    }
}

export const answerQuiz = (quizId, choose) => {
    return {
        type: ANSWER_QUIZ,
        payload: {
            answer: {
                quizId: quizId,
                choose: choose
            }
        }
    }
}