import test from 'tape'
import types from '../../lib/App/Redux/Actions/ActionTypes'

import actionReducer from '../../lib/App/Redux/Reducers/Action'

test('action reducer exists', (t) => {
  t.equal(typeof actionReducer.action, 'function')
  t.end()
})
