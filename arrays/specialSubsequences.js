/*
    You have given a string A having Uppercase English letters.
    You have to find how many times subsequence "AG" is there in the given string.
    NOTE: Return the answer modulo 10^9 + 7 as the answer can be very large.
 */

function specialSubsequences(s){
    const n = s.length
    let a_count = 0, total = 0
    for (let i = 0; i < n; i++) {
        if (s[i] === "A"){
            a_count +=1
        }
        if (s[i] === "G"){
            total += a_count
        }
    }
    return total
}

console.log(specialSubsequences("ABCGAG"))
console.log(specialSubsequences("GAB"))