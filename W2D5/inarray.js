"use strict";
{
/**
 * 
 * @param {object} arr is array of numbers.
 * @returns {Function} a function that could be called by arr1.filter with an array of
 * argument and will return if the array of elements are match.
 */

function inArray(arr){

   return function(subArr){
        return arr.includes(subArr);
    }

}

let arr1 = [1, 2, 3, 4, 5, 6, 7];

console.log(arr1.filter(inArray([1, 2, 10])));

describe("inArray", function() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
  
    it("returns the filter for values in array", function() {
  
      let filter = inArray(arr);
      assert.isTrue(filter(5));
      assert.isFalse(filter(0));
    });
  });
  
  
  describe("inBetween", function() {
  
    it("returns the filter for values between", function() {
      let filter = inBetween(3, 6);
      assert.isTrue(filter(5));
      assert.isFalse(filter(0));
    });
  });

}