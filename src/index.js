import {createStore, applyMiddleware, combineReducers} from 'redux'

export const testConstFunction = () => {
  return "test const function called."
}

export default {
  printMsg: () => {console.log("This is a default print message.")}
}
