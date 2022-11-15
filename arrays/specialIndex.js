/*
    Given an array, arr[] of size N, the task is to find the count of array indices such that removing an
    element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
 */

function specialIndex(nums){
    const n = nums.length
    const odd_prefix = []
    const even_prefix = []
    odd_prefix[0] = 0
    even_prefix[0] = nums[0]
    let ans = 0
    for (let i = 1; i < n; i++) {
        if (i % 2 === 0){
            even_prefix[i] = even_prefix[i-1] + nums[i]
            odd_prefix[i] = odd_prefix[i-1]
        } else {
            even_prefix[i] = even_prefix[i-1]
            odd_prefix[i] = odd_prefix[i-1] + nums[i]
        }
    }
    for (let i = 0; i < n; i++) {
        let even_sum = 0, odd_sum = 0
        if (i === 0) {
            even_sum = even_prefix[n-1] - even_prefix[i]
            odd_sum = odd_prefix[n-1] - odd_prefix[i]
        } else {
            even_sum = even_prefix[i-1] + odd_prefix[n-1] - odd_prefix[i]
            odd_sum = odd_prefix[i-1] + even_prefix[n-1] - even_prefix[i]
        }
        if (even_sum === odd_sum){
            ans += 1
        }
    }
    return ans
}

console.log(specialIndex([2, 1, 6, 4]))
console.log(specialIndex([1, 1, 1]))