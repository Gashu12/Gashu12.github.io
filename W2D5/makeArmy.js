///////////////////////////////////////////////////////////////////////

"use strict";
/**
 * @returns {number} it returns a number.
 */

function makeArmy() {

    let shooters = [];
    let i = 0;
    while (i < 10) {
      let j = i; // this is modified.
      let shooter = function() {
        console.log( j );// this also modified.
      };
      shooters.push(shooter);
      i++;
    }
    
    return shooters;
    
    }
    let army = makeArmy();
    army[9]();

    /*This is the modified function and this will change the lexical drawing as well
        the maximum value here is 9.
    */