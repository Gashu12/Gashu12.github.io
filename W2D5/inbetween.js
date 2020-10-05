"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7];
/**
 * 
 * @param {number} a the smallest number in the range.
 * @param {number} b the bigest number in the range.
 * @returns {Function} a function that will be called by Array.filter with a number argument 
 * and then will return true if the number is in the range.
 */
function inBetween(a, b){
    /**
     * 
     * @param {number} number is what filter will give us
     * @returns {boolean} true if the number is in the range
     */

    function between(number){
        if(a <= number && number <= b){
            return true;
        } else{
            return false;
        }
        
    }

    return between;

}


console.log(arr.filter(inBetween(-5, -1)));