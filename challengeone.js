function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
var numbers = [1, 2, 3, 4, 5, 6, 7];
var primes = numbers.map(function (num) { return isPrime(num); });
console.log(primes);
