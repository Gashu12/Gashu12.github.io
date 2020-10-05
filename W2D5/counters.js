////////////////////////////////////////////////////////////
"use strict";

// Are counters independent?

/**
 * @returns {number} it returns number
 */

function makeCounter() {
    let count = 0;
    
    return function() {
      return count++;
    };

    
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ? 0 will apear here.
  console.log( counter2() ) // ? 1 will show up here.

  // yes they are independant because each counters declared their own function.