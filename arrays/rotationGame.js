/*
    Given an integer array A of size N and an integer B, you have to print the same array after rotating it B times towards the right.
 */

function reverse (arr, s, e){
    while (s <= e){
        [arr[s], arr[e]] = [arr[e], arr[s]]
        s++
        e--
    }
    return arr
}

function rotationGame(num, B){
    const n = num.length, k = B % n
    if(k) {
        reverse(num, 0, n-1)
        reverse(num, 0, k-1)
        reverse(num, k, n-1)
    }
    return num
}

console.log(rotationGame([1,2,3,4,5], 2))
console.log(rotationGame([1,2,3,4], 2))