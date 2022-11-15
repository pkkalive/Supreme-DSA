/*
    Given array of integers, check if there is an equilibrium index in the array
    Equilibrium index: index for which, sum of elements on left side = sum of elements on right side
 */

// Brute force solution O(N^2)
function equilibriumIndex(nums){
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0, rightSum = 0
        for (let j = 0; j < i; j++) {
            leftSum += nums[j]
        }
        for (let k = i+1; k < nums.length; k++) {
            rightSum += nums[k]
        }
        if (leftSum === rightSum){
            return true
        }
    }
    return false
}

// Optimise solution O(N)
function equilibriumIndex1(nums){
    const prefixSum = []
    prefixSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
    }
    let leftSum = 0 , rightSum = 0
    const n = prefixSum.length -1
    for (let i = 0; i <= n ; i++) {
        if (i === 0){
            rightSum = prefixSum[n] - prefixSum[i]
        } else {
            leftSum = prefixSum[i-1]
            rightSum = prefixSum[n] - prefixSum[i]
        }
        if (leftSum === rightSum) {
            return true
        }
    }
    return false
}

console.log(equilibriumIndex([1, 2, 3, 0, 1, 3, 2]))
console.log(equilibriumIndex1([1, 2, 3, 0, 1, 3, 2]))
console.log(equilibriumIndex([4, 6, -2, 8, 10, 0, -6, 2, 3, 1]))
console.log(equilibriumIndex1([4, 6, -2, 8, 10, 0, -6, 2, 3, 1]))