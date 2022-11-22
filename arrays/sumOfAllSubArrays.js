/*
    You are given an integer array A of length N.
    You have to find the sum of all subarray sums of A.
    More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero
    or more elements from either end of the array.
    A subarray sum denotes the sum of all the elements of that subarray.
 */

// Brute force solution O(N^3)
function sumOfAllSubArrays(nums){
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0
            for (let k = i; k <= j; k++) {
                sum += nums[k]
            }
            ans += sum
        }
    }
    return ans
}



function sumOfAllSubArrays1(A){
    let n = A.length;
    let sum = BigInt(0)
    for(let i = 0; i < n; i++){
        let x = (i + 1) * (n - i);
        sum += BigInt(x) * BigInt(A[i]);
    }
    return sum;
}

console.log(sumOfAllSubArrays([1, 2, 3]))
console.log(sumOfAllSubArrays1([1, 2, 3]))