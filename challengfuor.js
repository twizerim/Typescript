"use strict";
exports.__esModule = true;
exports.Findmaxvalue = void 0;
function Findmaxvalue(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
exports.Findmaxvalue = Findmaxvalue;
var numbersArray = [0, 1, 9, 2, 7, 3, 4, 5, 6, 8];
var maxValue = Findmaxvalue(numbersArray);
if (maxValue !== undefined) {
    console.log("maximum number is : ".concat(maxValue));
}
else {
    console.log("Array is empty.");
}
