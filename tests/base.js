import test from 'tape'
import index, {testConstFunction} from '../lib/index'

test('can run functions', (t) => {
  t.equal(index.messagePropertyText, 'text', 'is the right message')
  t.end()
})

test(' has imported function', (t) => {
  t.equal(testConstFunction(), 'test const function called.', 'is the right message')
  t.end()
})
