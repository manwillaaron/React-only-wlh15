import {applyMiddleware, createStore, combineReducers} from 'redux'
import promiseMiddleware from  'redux-promise-middleware'
import reducer  from './reducer'


const rootReducer = combineReducers({
    postState: reducer
})

const store =  createStore(rootReducer, applyMiddleware(promiseMiddleware))

export default store