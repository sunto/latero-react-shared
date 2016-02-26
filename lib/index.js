"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testConstFunction = undefined;

var _redux = require("redux");

var _redux2 = _interopRequireDefault(_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testConstFunction = exports.testConstFunction = function testConstFunction() {
  return "test const function called.";
};

exports.default = {
  printMsg: function printMsg() {
    console.log("This is a default print message.");
  }
};