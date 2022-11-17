/*
    Given an array of integers A, find and return the product array of the same size where the ith element of
    the product array will be equal to the product of all the elements divided by the ith element of the array.
    Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using
    the division operator.
 */

function productArrayPuzzle(A){
    const n = A.length
    const prefix_product = [], postfix_product = []
    prefix_product[0] = A[0]
    postfix_product[n - 1] = A[n - 1]
    const ans = []

    for (let i = 1; i < A.length; i++) {
        prefix_product[i] = prefix_product[i - 1] * A[i]
    }
    for (let i = n - 2; i >= 0; i--) {
        postfix_product[i] = postfix_product[i + 1] * A[i]
    }
    for (let i = 0; i < n; i++) {
        if(i === 0){
            ans[i] = postfix_product[i]
        } else if (i === n - 1){
            ans[i] = prefix_product[n - 2]
        } else {
            ans[i] = prefix_product[i - 1] * postfix_product[i + 1]
        }
    }
    return ans
}

console.log(productArrayPuzzle([1, 2, 3, 4, 5]))