import {combineReducers} from 'redux'
import questionReducer from './questionReducer'

const rootReducer = combineReducers({
    question: questionReducer
})

export default rootReducer