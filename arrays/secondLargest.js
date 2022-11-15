/*
    You are given an integer array A. You have to find the second largest element/value in the array or report
    that no such element exists.
 */

// Using sorting O(NlogN)
function secondLargest(nums){
    nums.sort((a,b) => a - b)
    const newNums = [...new Set(nums)]
    return newNums[newNums.length - 2]
}

// Optimised Solution O(N)
function secondLargest1(nums){
    const n = nums.length
    let curr_max = -Infinity, prev_max = -Infinity
    if(n <= 1){
        return -1
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] > curr_max){
            prev_max = curr_max
            curr_max = nums[i]
        }
        if (nums[i] !== curr_max && nums[i] > prev_max){
            prev_max = nums[i]
        }
    }
    return prev_max
}

// Optimised Solution O(N)
function secondLargest2(nums){
    const len = nums.length
    let max_index = 0, ans = -1
    if(len <= 1){
        return -1
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[max_index]){
            max_index = i
        }
    }
    for (let i = 0; i < len; i++) {
        if(i !== max_index && nums[i] > ans){
            ans = nums[i]
        }
    }
    return ans
}



console.log(secondLargest([0, 2, 9]))
console.log(secondLargest1([0, 2, 9]))
console.log(secondLargest2([0, 2, 9]))
console.log(secondLargest( [13, 7, 16, 18, 14, 17, 18, 8, 10]))
console.log(secondLargest1( [13, 7, 16, 18, 14, 17, 18, 8, 10]))
console.log(secondLargest2([13, 7, 16, 18, 14, 17, 18, 8, 10]))
console.log(secondLargest( [20, 12, 15, 19, 13, 5, 13, 12, 18]))
console.log(secondLargest1( [20, 12, 15, 19, 13, 5, 13, 12, 18]))
console.log(secondLargest2([20, 12, 15, 19, 13, 5, 13, 12, 18]))