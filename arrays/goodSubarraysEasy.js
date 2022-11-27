/*
    Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
    1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
    2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
    Your task is to find the count of good subarrays in A.
 */

function goodSubarraysEasy(A, B) {
    let count = 0
    const n = A.length
    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = i; j < n; j++) {
            sum += A[j]
            let size = j - i + 1
            if ((size % 2 === 0) && sum < B) {
                count += 1
            }
            if ((size % 2 !== 0) && sum > B) {
                count += 1
            }
        }
    }
    return count
}

console.log(goodSubarraysEasy([13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9], 65))