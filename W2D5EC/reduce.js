"use strict";

/**
 * 
 * @param {Array} arr of values to reduce
 * @param {Function} func to callback to do the reducing
 * @param {*} init value to start as the accumulator
 * @returns {*} the final value of the accumulator
 */
function myReduce(arr, func, init) {

    let accumulator = init;
    for (const element of arr) {
        accumulator = func(accumulator, element);
    }
    return accumulator;
}

function reduced(acc, cur){

    return acc * cur;
}

const myArray = [1, 2, 3, 5, 9, 6];
console.log(myReduce(myArray, reduced, 1));
