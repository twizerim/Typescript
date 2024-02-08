
export function isPrime(num: number): boolean {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];


const primes: boolean[] = numbers.map((num) => isPrime(num));

console.log(primes);