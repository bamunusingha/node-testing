"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var count = 0;

var next = exports.next = function next() {
    console.log(count++);
};