'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('../Actions/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = (0, _seamlessImmutable2.default)({
  field1: false
});

var reducer = function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.ACTION_REQUEST:
      state.merge({ field1: true });
    default:
      return state;
  }
};

exports.default = { action: reducer };