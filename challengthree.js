"use strict";
exports.__esModule = true;
exports.capitalizeFirstLetter = void 0;
function capitalizeFirstLetter(sentence) {
    var words = sentence.split(' ');
    var capitalizedWords = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); });
    var capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence;
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var inputSentence = "hello i am full stack softwarw developer";
var result = capitalizeFirstLetter(inputSentence);
console.log("Capitalized Sentence:", result);
