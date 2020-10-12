"use strict";

function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit because this is the object before the dot this= rabbit.
console.log(Rabbit.prototype)//.sayHi(); /* undefined, that means Rabbit.prototype === rabbit.__proto__, 
                            //so there is no inherited property here*/
Object.getPrototypeOf(rabbit).sayHi(); // undefined
console.log(rabbit.__proto__)//.sayHi(); // undefined this is the same as the second case.