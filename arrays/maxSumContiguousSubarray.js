/*
    Find the contiguous non-empty subarray within an array, A of length N, with the largest sum.
 */

function maxSumContiguousSubarray(nums){
    let curr_sum = 0, max_sum = -Infinity
    for (const num of nums) {
        curr_sum += num
        max_sum = Math.max(curr_sum, max_sum)
        curr_sum = Math.max(0, curr_sum);
    }
    return max_sum
}

console.log(maxSumContiguousSubarray([1, 2, 3, 4, -10]))
console.log(maxSumContiguousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))