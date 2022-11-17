/*
    You are given an integer array A of size N.
    You have to pick B elements in total. Some (possibly 0) elements from left end of array A and some
    (possibly 0) from the right end of array A to get the maximum sum.
    Find and return this maximum possible sum.
    NOTE: Suppose B = 4, and array A contains 10 elements, then You can pick the first four elements or can
    pick the last four elements, or can pick 1 from front and 3 from the back, etc. You need to return the
    maximum possible sum of elements you can pick.
 */

function pickFromBothSides(nums, key){
    const n = nums.length
    let curr_sum = 0, max_sum = 0
    let ans = -Infinity
    for (let i = 0; i < key; i++) {
        max_sum += nums[i]
    }
    ans = Math.max(max_sum, ans)
    for (let i = 1; i <= key; i++) {
        curr_sum += nums[n - i]
        max_sum -= nums[key - i]
        let curr_max_sum = curr_sum + max_sum
        ans = Math.max(curr_max_sum, ans)
    }
    return ans
}

console.log(pickFromBothSides([5, -2, 3 , 1, 2], 3))