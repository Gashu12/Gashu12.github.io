"use strict";
{
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true
}

{
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // ? true

/* true because it doesn't affect the exsisting object */

}

{
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // ? false

/* false because it changes the value of property name eats in the constructor fubction Rabbit */

}

{
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // ? true 
/* true because delete in here it dosen't affect the constructor function out there */

}

{
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ? undefined

/* undefined because the property eats is gone 
since it deleted from the constructor function Rabbit. */

}
