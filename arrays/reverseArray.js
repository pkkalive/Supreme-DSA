/*
    Given an array reverse in-place
 */
function reverseArray (arr){
    let start = 0, end = arr.length
    while (start < end){
        [arr[start], arr[end-1]] = [arr[end-1], arr[start]]
        start++
        end--
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5]))