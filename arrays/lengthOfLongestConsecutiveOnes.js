/*
    Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the
    length of the longest consecutive 1’s that can be achieved
 */

function lengthOfLongestConsecutiveOnes(A){
    const n = A.length
    let count = 0
    for (let i = 0; i < n; i++) {
        if (A[i] === '0'){
            let left = 0
            for (let j = i - 1; j >=0 ; j--) {
                if (A[j] === '1') {
                    left ++
                } else {
                    break
                }
            }
            let right = 0
            for (let j = i + 1; j < n; j++) {
                if (A[j] === '1') {
                    right ++
                } else {
                    break
                }
            }
            count = Math.max((left + right + 1), count)
        }
    }
    return count === 0 ? n : count
}

console.log(lengthOfLongestConsecutiveOnes("000000000000000"))
console.log(lengthOfLongestConsecutiveOnes("111011101"))