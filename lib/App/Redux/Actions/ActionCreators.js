'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionRequest = undefined;

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionRequest = exports.actionRequest = function actionRequest() {
  return createAction('ACTION_REQUEST');
};