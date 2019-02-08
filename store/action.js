import {getQuizFromTrivia} from '../func/main'
import {GET_QUESTION,TOGGLE_IS_DONE,TOGGLE_IS_START} from './actionType'

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