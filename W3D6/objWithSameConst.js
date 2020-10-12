"use strict";
{
function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  console.log( user2.name ); // Pete it works.
}

  function User(name) {
    this.name = name;
  }
  
  User.prototype = {};

  let user = new User('John');

  let user2 = new user.constructor('Pete');
  
  console.log( user2.name ); // undefined. 

  /* since it emptized the second object property there is no more name property */
