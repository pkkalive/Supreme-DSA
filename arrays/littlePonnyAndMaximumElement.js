/*
    Little Ponny is given an array, A, of N integers. In a particular operation, he can set any element of the array equal to -1.
He wants your help in finding out the minimum number of operations required such that the maximum element of the resulting array is B. If it is not possible, then return -1.
 */

function littlePonnyAndMaximumElement(num, key){
    const len = num.length
    let flag = false, count = 0
    for (let i = 0; i < len; i++) {
        if (num[i] === key){
            flag = true
        }
        if (num[i] > key){
            count++
        }
    }
    return flag ? count : -1
}

console.log(littlePonnyAndMaximumElement([2, 4, 3, 1, 5], 3))