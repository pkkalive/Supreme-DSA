/*
    Given an array of size N, find the subarray of size K with the least average.
 */

function subarrayWithLeastAverage(nums, k){
    let curr_sum = 0
    const n = nums.length
    for (let i = 0; i < k; i++) {
        curr_sum += nums[i]
    }
    let ans = curr_sum, index = 0
    for (let i = k; i < n; i++) {
        curr_sum -= nums[i-k]
        curr_sum += nums[i]
        if(curr_sum < ans) {
            ans = curr_sum;
            index = i- k +1;
        }
    }
    return index
}

console.log(subarrayWithLeastAverage([3, 7, 90, 20, 10, 50, 40], 3))
console.log(subarrayWithLeastAverage([3, 7, 5, 20, -10, 0, 12], 2))