////////////////////////////////////////////////////////////////
"use strict";

/* Does a function pickup latest changes? */

/* yes it dose */

let name = "John";

/**
 * @returns {string} it returns string
 */

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // it displays "Hi, pete" because, it is modified from John to Pete