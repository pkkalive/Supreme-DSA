/*
    Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of
    the maximum value of the array and at least one occurrence of the minimum value of the array.
 */

function closestMinMax(nums){
    let min_val = Infinity, max_val = -Infinity
    let min_index = -1, max_index = -1
    let ans = nums.length
    for (const num of nums) {
        min_val = Math.min(min_val, num)
        max_val = Math.max(max_val, num)
    }
    for (const [index, value] of nums.entries()) {
        if(value === min_val){
            min_index = index
        }
        if (value === max_val){
            max_index = index
        }
        if (max_index >=0 && min_index >= 0){
            let length = Math.abs(max_index - min_index)
            ans = Math.min(length, ans)
        }
    }
    return ans+1
}

console.log(closestMinMax([1, 3]))