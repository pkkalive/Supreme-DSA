/*
    Given an array of integers, count the number of elements having at least one element greater than itself
 */

// Brute force O(n^2)
function specialElementCount(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j]> arr[i]){
                count++
                break
            }
        }
    }
    return count
}

// Optimise Code O(n)
function specialElementCount2(arr){
    let count = 0, max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < max){
            count++
        }
    }
    return count
}

// Challenge to use only one for loop O(n)
function specialElementCount3(arr){
    let freq = 0, max = -Infinity, len = arr.length
    for (let i = 0; i < len; i++) {
       if (arr[i] > max){
           max = arr[i]
           freq = 1
       } else if (arr[i] === max){
            freq++
       }
    }
    return len - freq
}

console.log(specialElementCount([3, -2, 6, 8, 5, 8, 4]))
console.log(specialElementCount2([3, -2, 6, 8, 5, 8, 4]))
console.log(specialElementCount3([3, -2, 6, 8, 5, 8, 4]))

console.log(specialElementCount([7,7,7,7,1]))
console.log(specialElementCount2([7,7,7,7,1]))
console.log(specialElementCount3([7,7,7,7,1]))

console.log(specialElementCount([7,7,7,7,7]))
console.log(specialElementCount2([7,7,7,7,7]))
console.log(specialElementCount3([7,7,7,7,7]))