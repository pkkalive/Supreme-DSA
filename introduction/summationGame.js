/*
    Write a program to find sum all Natural numbers from 1 to N where you have to take N as input from user
 */

// brute force O(n)
function summationGame(num){
    let sum = 0
    for (let i = 1; i <= num; i++){
        sum = sum + i
    }
    return sum;
}

// Optimise code O(1)
function summationGame2(num){
    return (num * (num +1))/2;
}

console.log(summationGame(100))
console.log(summationGame2(100))
console.log(summationGame(60))
console.log(summationGame2(60))