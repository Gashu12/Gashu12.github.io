//////////////////////////////////////////////////////////
"use strict";
{
// Which variables are available?

/**
 * @returns {function} it return function
 */

function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // it will show pete here.
  
  // the variable pete is available.

}