/* eslint-disable id-length */
"use strict";
/**
 * Returns reversed string.
 *
 * @param {string} string of words.
 * @return {string} reversed string of words.
 */

function reverse(string){

    let reverse = "";
    for(let i = string.length - 1; i >= 0; i--){

        reverse += string[i];
    }

    return reverse;
}

/**
 * Returns array of strings that have length greater than i.
 *
 * @param {Array} array of strings.
 * @param {number} i is compared with each string length of the array.
 * @return {Array} reversed string of words.
 */

function filterLongWords(arr, i){
    let temp = [];
    for(let j = 0; j < arr.length; j++){
        if(arr[j].length > i){
           temp.push(arr[j]); 
        }
    }

    return temp;
}