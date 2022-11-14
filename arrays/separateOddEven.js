/*
    You are given an integer T denoting the number of test cases. For each test case, you are given an integer array A.
    You have to print the odd and even elements of array A in 2 separate lines.
    NOTE: Array elements should have the same relative order as in A.
 */

function separateOddEven(nums){
    const even_nums = [], odd_nums = []
    for (const num of nums) {
        if (num % 2 === 0){
            even_nums.push(num)
        } else {
            odd_nums.push(num)
        }
    }
    console.log(even_nums, odd_nums)
}

separateOddEven([1, 2, 3, 4, 5])
separateOddEven([4, 3, 2])