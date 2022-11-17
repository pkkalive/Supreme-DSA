/*
    A wire connects N light bulbs. Each bulb has a switch associated with it; however, due to faulty wiring, a
    switch also changes the state of all the bulbs to the right of the current bulb.
    Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all
    the bulbs. You can press the same switch multiple times.
    Note: 0 represents the bulb is off and 1 represents the bulb is on.
 */

function bulbs(bulbs){
    let count = 0, state = 0
    for (const bulb of bulbs) {
        if(bulb === state){
            count += 1
            state = 1 - state
        }
    }
    return count
}

console.log(bulbs([1, 1, 0, 0, 1, 1, 0, 0, 1 ]))