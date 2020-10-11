"use strict";
/////////////////////////////////////////////////////////////////////////

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // ? (1) true
  /* it takes from its own jumps property */
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2) null
  /* null because the proprty jamps inside
   rabbit is gone and it inherit from animal.
  */
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3) undefined
  /* nudefined because there is no more jamps property
  inside rabbit or it's parent animal */

////////////////////////////////////////////////////////////////////////////