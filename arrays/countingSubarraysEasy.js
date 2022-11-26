/*
    Given an array A of N non-negative numbers and a non-negative number B, you need to find the number of
    subarrays in A with a sum less than B. We may assume that there is no overflow.
 */

function countingSubarraysEasy(A, B){
    const n = A.length
    let count = 0
    let pref = []
    pref[0] = A[0]
    for(let i = 1; i < n; i++) {
        pref[i] = pref[i - 1] + A[i]
    }
    for(let i = 0 ; i < n; i++) {
        for(let j = i; j <n; j++) {
            let sum = pref[j]
            if(i > 0) {
                sum -= pref[i - 1]
            }
            if(sum < B) {
                count += 1
            }
        }
    }
    return count
}

console.log(countingSubarraysEasy([1, 11, 2, 3, 15], 10))