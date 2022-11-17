/*
    Given an integer array A of size N. In one second, you can increase the value of one element by 1. Find the
    minimum time in seconds to make all elements of the array equal.
 */

function timeToEquality(nums){
    let max_num = -Infinity, count = 0
    for (const num of nums) {
        max_num = Math.max(max_num, num)
    }
    for (const num of nums) {
        count += max_num - num
    }
    return count
}

console.log(timeToEquality([2, 4, 1, 3, 2]))