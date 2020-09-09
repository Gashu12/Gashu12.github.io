/* eslint-disable id-length */
"use strict";
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function maXOfThree(a, b, c){
    let max;
    if(a > b && a >c){
        max = a;
    }
    else if(b > a && b > c){
        max = b;
    }
    else{
        max = c;
    }
    return max;

}

function sum(arr){
    let sumOf = 0;
    for(let i = 0; i < arr.length; i++){
        sumOf += arr[i];
    }
    return sumOf;
}

function findLongestWord(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }

    return max;
}
