/*
    Write a program to print maximum and minimum elements of the input array A of size N. The first line of the
    input would contain a single integer N that represents the length of the array. The next N lines contain
     elements of the input array A.
 */

function minAndMaxArray(nums){
    let min = Infinity, max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(nums[i], min)
        max = Math.max(nums[i], max)
    }
    return [min, max]
}

console.log(minAndMaxArray([10, 50, 40, 80]))
console.log(minAndMaxArray([1, 2, 3, 4, 5]))