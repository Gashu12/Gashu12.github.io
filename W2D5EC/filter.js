"use strict";

/**
 * 
 * @param {Array} arr is value to be filtered.
 * @param {Function} func  is function to filter out the true condition.
 */

function myFilter(arr, func) {

    const filteredArr = [];
    for (const element of arr) {
        const filterdElement = func(element);
        if(filterdElement)
       filteredArr.push(filterdElement);
    }
    return filteredArr;
}

/**
 * 
 * @param {*} ele is value to check for true condition
 * @returns {} returns true value.
 */

function filterd(ele){
    if(ele % 2 === 0){
        return ele;
    }
}

const oriArr = [6, -3, 0, 5, 10, -8];

console.log(myFilter(oriArr, filterd));