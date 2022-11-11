/*
    Problem Description
    Given an integer A as input, you have to tell whether it is a prime number or not.
    A prime number is a natural number greater than 1 which is divisible only by 1 and itself.
 */

function isItPrime(num){
    for (let i = 2; i * i <= num; i++){
        if(num % i === 0){
            return "No"
        }
    }
    return "Yes"
}

console.log(isItPrime(3))
console.log(isItPrime(10))
console.log(isItPrime(5))
console.log(isItPrime(26))