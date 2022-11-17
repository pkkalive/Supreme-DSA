/*
    You are given a string S, and you have to find all the amazing substrings of S.
    An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
 */

// Using extra space S(N) and time complexity is O(N)
function amazingSubarrays(S){
    const map = new Map()
    const n = S.length, MOD = 10003
    let count = 0
    map.set('a', true)
    map.set('e', true)
    map.set('i', true)
    map.set('o', true)
    map.set('u', true)
    map.set('A', true)
    map.set('E', true)
    map.set('I', true)
    map.set('O', true)
    map.set('U', true)

    for (let i = 0; i < n; i++) {
        if(map.has(S[i])){
            count += n - i
        }
    }
    return count % MOD
}

// Without extra space S(1) and time complexity is O(N) using switch case
function amazingSubarrays1(S){
    const n = S.length, MOD = 10003
    let count = 0
    for (let i = 0; i < n; i++) {
        switch (S[i]){
            case 'a':
                count += n - i
                break
            case 'e':
                count += n - i
                break
            case 'i':
                count += n - i
                break
            case 'o':
                count += n - i
                break
            case 'u':
                count += n - i
                break
            case 'A':
                count += n - i
                break
            case 'E':
                count += n - i
                break
            case 'I':
                count += n - i
                break
            case 'O':
                count += n - i
                break
            case 'U':
                count += n - i
                break
            default:
                break
        }
    }
    return count % MOD
}

// Without extra space S(1) and time complexity is O(N) using if case
function amazingSubarrays2(S){
    const n = S.length, MOD = 10003
    let count = 0
    for (let i = 0; i < n; i++) {
        if (S[i] === 'a' || S[i] === 'e' || S[i] === 'i' || S[i] === 'o' || S[i] === 'u' ||
            S[i] === 'A' || S[i] ===  'E' || S[i] === 'I' || S[i] === 'O' || S[i] === 'U'){
                count += n - i
        }
    }
    return count % MOD
}

console.log(amazingSubarrays("pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn"))
console.log(amazingSubarrays1("pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn"))
console.log(amazingSubarrays2("pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn"))