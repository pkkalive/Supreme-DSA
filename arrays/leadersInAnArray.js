/*
    Given an integer array A containing N distinct integers, you have to find all the leaders in array A.
    An element is a leader if it is strictly greater than all the elements to its right side.
    NOTE:The rightmost element is always a leader.
 */

function leadersInAnArray(A){
    const ans = [], n = A.length
    let max = A[n-1]
    ans.push(max)
    for (let i = n-2; i >= 0; i--) {
        if (max < A[i]){
            max = A[i]
            ans.push(max)
        }
    }
    return ans
}

console.log(leadersInAnArray([16, 17, 4, 3, 5, 2]))