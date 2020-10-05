///////////////////////////////////////////////////////////

/* Here a counter object is made with the help of the constructor function.

Will it work? What will it show?
*/
///////////////////////////////////////////////////////////////////
"use strict";

/**
 * @returns {number} it returns number
 */

function Counter() {
    let count = 0;

    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };

  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // ? 1 will show up here because it is pre increment
  console.log( counter.up() ); // ? 2 will show up here because it is pre increment
  console.log( counter.down() ); // ? 1 will show up here because it is pre decrement
  // yes it will work fine.