/*
    For a given number A, print its multiplication table having the first 10 multiples.
 */

function multiplicationTable(num){
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
}

multiplicationTable(5)
multiplicationTable(2)