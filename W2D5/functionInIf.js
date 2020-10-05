////////////////////////////////////////////////////////////
"use strict";
//Function in if

let phrase = "Hello";

if (true) {
  let user = "John";

  /**
   * @returns {string} it returns string.
   */

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // it will be errer.