/*
    You are given an integer N you need to print all the Armstrong Numbers between 1 to N. (N inclusive).
    An Armstrong number is a number such that when each individual digit of the number is raised to the power three in the number and then added up, they are equal to the original number itself.
    For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ).
    Note: All the integers N given as input in this problem are limited to three digits
 */

function armstrongNumbers(num){
    let temp = num, sum = 0
    while (temp > 0){
        let last = temp % 10
        sum += last * last * last
        temp = Math.floor(temp/10)
    }
    return (sum === num) ? "Yes" : "No"
}

console.log(armstrongNumbers(153))
console.log(armstrongNumbers(200))