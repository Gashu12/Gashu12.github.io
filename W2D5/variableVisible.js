//////////////////////////////////////////////////////
"use strict";
//Is variable visible?

let x = 1;

function func() {
  //console.log(x); // ? reference error because it can't acces the variable x before initialization.
  console.log(x);
  let x = 2;
 
}

func(); // this is gonna be reference error.