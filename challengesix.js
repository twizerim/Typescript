"use strict";
exports.__esModule = true;
exports.convertoArray = void 0;
function convertoArray(objc) {
    var keyvalue = Object.entries(objc);
    var convert = keyvalue;
    return convert;
}
exports.convertoArray = convertoArray;
var fruits = { mango: "yellow", avocado: "green", tomatos: "red" };
var resulte = convertoArray(fruits);
console.log(resulte);
