/*
    You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that
    the sum of contiguous elements is maximum. But the sum must not exceed B.
 */

function maximumSubarrayEasy(A, B, C){
    let ans = 0;
    for( let i = 0; i < A; i++) {
        let sum = 0;
        for( let j = i; j < A; j++) {
            sum += C[j];
            if( sum <= B && ans < sum)
                ans = Number(sum);
            else if( sum > B)
                break;
        }
    }
    return ans;
}

console.log(maximumSubarrayEasy(5,12,[2, 1, 3, 4, 5]))