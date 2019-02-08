import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

export default store