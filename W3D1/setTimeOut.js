"use strict";
/**
 * 
 * @param {number} from is a number that is a starting point.
 * @param {number} to is a number which is the max range.
 */
function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);