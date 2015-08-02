/*jshint node:true */

'use strict';

var identity = require('lodash.identity');
var bigdecimal = require('bigdecimal');

module.exports = {
  getInstance: getInstance,
  getPrecision: getPrecision,
  setPrecision: setPrecision,
  plus: plus,
  minus: minus,
  times: times,
  div: div,
  pow: pow,
  toString: toString,
  valueOf: toString,
  parseInput: identity
};

var precision = 20;

function getPrecision() {
  return precision;
}

function setPrecision(bigdecimal, n) {
  precision = n;
}

function plus(x, y) {
  return x.add(y);
}

function minus(x, y) {
  return x.subtract(y);
}

function times(x, y) {
  return x.multiply(y);
}

function div(x, y) {
  return x.divide(y, precision, bigdecimal.BigDecimal.ROUND_HALF_UP).stripTrailingZeros();
}

function pow(x, n) {
  return x.pow(Number(n.toString()));
}

function toString(x) {
  return x.toString();
}

function getInstance() {
  return bigdecimal.BigDecimal;
}
