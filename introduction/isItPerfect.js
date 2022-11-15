/*
    You are given N positive integers.
    For each given integer A, you have to tell whether it is a perfect number or not.
    A perfect number is a positive integer which is equal to the sum of its proper positive divisors (excluding
    the number itself).
    A positive proper divisor divides a number without leaving any remainder.
 */

function isItPerfect(num){
    let sum = 0;
    for (let i = 1; i < num; i++){
        if(num % i === 0){
            console.log(i)
            sum += i
        }
    }
    return (sum === num) ? "Yes" : "No"
}

console.log(isItPerfect(4))
console.log(isItPerfect(6))
