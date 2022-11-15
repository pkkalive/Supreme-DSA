/*
    Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] ==
     B). Check if any good pair exist or not.
 */

// Brute force solution O(n^2)
function goodPair(nums, key){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === key){
                return true
            }
        }
    }
    return false
}

// Using binary search and sorting O(NlogN)
function goodPair1(nums, key){
    nums.sort((a,b) => a - b)
    let s = 0, e = nums.length-1
    while (s < e){
        let sumTobe = nums[s] + nums[e]
        if (sumTobe === key) {
            return true
        } else if (sumTobe > key){
            e--
        } else if (sumTobe < key){
            s++
        }
    }
    return false
}

// Using HashMap best optimise O(N)
function goodPair2(nums, key){
    const map = new Map()
    for(let i = 0; i < nums.length;i++){
        const sumToBe = key - nums[i]
        if(map.has(sumToBe)){
            return true
        }
        map.set(nums[i], true)
    }
    return false
}

console.log(goodPair([1,2,3,4],8))
console.log(goodPair1([1,2,3,4],8))
console.log(goodPair2([1,2,3,4],8))