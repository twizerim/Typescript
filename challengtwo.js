function calculateFactorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    else {
        return number * calculateFactorialRecursive(number - 1);
    }
}
var numberToCalculateFactorialFor = 5;
console.log(calculateFactorialRecursive(numberToCalculateFactorialFor));
