/*
    You are given an integer array A.
    Decide whether it is possible to divide the array into one or more sub-arrays of even length such that the
    first and last element of all sub-arrays will be even.
    Return "YES" if it is possible; otherwise, return "NO" (without quotes).
 */

function evenSubArrays(nums){
    const n = nums.length
    if (nums[0] % 2 === 0 && nums[n - 1] % 2 === 0 && n % 2 === 0){
        return "YES"
    }
    return "NO"
}

console.log(evenSubArrays([2, 4, 8, 6]))
console.log(evenSubArrays([2, 4, 8, 7, 6]))