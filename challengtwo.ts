function calculateFactorialRecursive(number: number): number {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorialRecursive(number - 1);
    }
}

const numberToCalculateFactorialFor=5; 
console.log(calculateFactorialRecursive(numberToCalculateFactorialFor));

