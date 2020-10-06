"use strict";

/**
 * 
 * @param {Array} arr is array to be mapped.
 * @param {Function} func is function which gives mapped value.
 * @returns {} 
 */

function myMap(arr, func) {

    const newArr = [];
    for (const element of arr) {
        const result = func(element);
        newArr.push(result);
    }
    return newArr;
}

const myArr = [1, -2, 3, 4, -5, 6];

const mapResult = myMap(myArr, absValue);

/**
 * 
 * @param {number} num is anumber.
 * @returns {number} absolute value of the number.
 */

function absValue(num){ return Math.abs(num);}

console.log(mapResult);