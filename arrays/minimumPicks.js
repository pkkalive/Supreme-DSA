/*
    You are given an array of integers A of size N.
    Return the difference between the maximum among all even numbers of A and the minimum among all odd numbers in A.
 */

function minimumPicks(nums){
    let evenSum = -Infinity, oddSum = Infinity
    for (const num of nums) {
        if(num % 2 === 0){
            evenSum = Math.max(num, evenSum)
        } else {
            oddSum = Math.min(num, oddSum)
        }
    }
    return evenSum - oddSum
}

console.log(minimumPicks([0, 2, 9]))
console.log(minimumPicks([5, 17, 100, 1]))