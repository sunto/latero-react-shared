import types from '../Actions/ActionTypes'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  field1: false
})

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ACTION_REQUEST: state.merge({field1: true})
    default: return state
  }
}

export default {action: reducer}
