"use strict";
exports.__esModule = true;
exports.reversString = void 0;
function reversString(string) {
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
exports.reversString = reversString;
var originalString = "TWIZERIMANA Gedeon";
var stringReversa = reversString(originalString);
console.log(stringReversa);
