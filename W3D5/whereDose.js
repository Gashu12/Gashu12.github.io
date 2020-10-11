"use strict";
{
let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
rabbit.eat();

/* rabbit recives the the full property because "this" is an object before dot */
}