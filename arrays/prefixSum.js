/*
    Given an array of integers A. Return the sum of all the query ranges
 */

// Brute force solution O(N^2)
function prefixSum(nums, query){
    const ans = []
    for (let i = 0; i < query.length; i++) {
        let start = query[i][0], end = query[i][1]
        let sum = 0;
        for (let j = start; j <= end; j++){
            sum += nums[j]
        }
        ans.push(sum)
    }
    return ans
}

// Optimise solution O(N)
function prefixSum2(nums, query) {
    const preFixSum = [], result = []
    preFixSum[0] = nums[0]
    for (let i = 1; i < nums.length ; i++) {
        preFixSum[i] = preFixSum[i - 1] + nums[i]
    }
    for (let i = 0; i < query.length; i++) {
        let start = query[i][0], end = query[i][1]
        if (start === 0){
            result.push(preFixSum[end])
        } else {
            result.push(preFixSum[end] - preFixSum[start-1])
        }
    }
    return result
}

console.log(prefixSum([20, 12, 15, 19, 13, 5, 13, 12, 18], [[2,5], [3,4], [1,3], [0,6]]))
console.log(prefixSum2([20, 12, 15, 19, 13, 5, 13, 12, 18], [[2,5], [3,4], [1,3], [0,6]]))