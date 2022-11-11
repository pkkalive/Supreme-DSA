/*
    Given a number A. Return square root of the number if it is perfect square otherwise return -1
 */

function squareRootNumber(num){
    for (let i = 1; i * i <= num ; i++) {
        if (i * i === num){
            return i
        }
    }
    return -1
}

console.log(squareRootNumber(16))
console.log(squareRootNumber(25))
console.log(squareRootNumber(30))