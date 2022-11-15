/*
    Given an array of integers A and multiple values in B, which represents the number of times array A needs
    to be left rotated. Find the rotated array for each value and return the result in the from of a matrix
    where ith row represents the rotated array for the ith value in B.
 */

function multipleLeftRotationsArray(nums, queries){
    const n = nums.length
    const ans = []
    for (const query of queries) {
        let k = query % n
        let temp = []
        if (k){
            for (let i = k; i < n; i++) {
                temp.push(nums[i])
            }
            for (let i = 0; i < k; i++) {
                temp.push(nums[i])
            }
        }
        ans.push(temp)
    }
    return ans
}

console.log(multipleLeftRotationsArray([1, 2, 3, 4, 5], [2, 3]))