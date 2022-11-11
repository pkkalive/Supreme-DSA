/*
    Given a number A. Return the number factors of a number A
 */

//Brute force O(n)
function countFactors (num){
    let count = 0
    for (let i = 1; i <= num; i++){
        if (num % i === 0){
            count ++;
        }
    }
    return count;
}

//Optimise Code O(Sqrt(n))
function countFactors2 (num){
    let count = 0
    for (let i = 1; i * i <= num; i++){
        if (num % i === 0) {
            if ( i * i === num ) {
                count = count + 1
            }
            else {
                count = count + 2
            }
        }
    }
    return count;
}

console.log(countFactors(36))
console.log(countFactors2(36))
console.log(countFactors(42))
console.log(countFactors2(42))