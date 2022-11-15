/*
    You are given an integer T (number of test cases). You are given array A and an integer B for each test
    case. You have to tell whether B is present in array A or not.
 */

function searchElement(nums, key){
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === key){
            return true
        }
    }
    return false
}

console.log(searchElement([4, 1, 5, 9, 1], 5))