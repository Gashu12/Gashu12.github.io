
/////////////////////////////////////////////////////////

"use strict";

// Section Object. //

let user = {

};
user.name = "John";
user.sureName = "Smith";

user.name = "Pete";
delete user.name;

//////////////////////////////////////////////////////////

/**
 * 
 * @param {object} obj of boolean
 * @returns {boolean} it returns boolean.
 */
function isEmpety(obj){

    for(let key in obj){
        return false;
    }
   return true;
}

let scedule = {};

console.log(isEmpety(scedule));

scedule["8:30"] = "get up";

console.log(isEmpety(scedule));

/////////////////////////////////////////////////////////

// yes it works fine but we can't change the variable.//

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,

    };

    salaries.peter = 150;
    //salaries = {};

    let sum = 0;

        for(let key in salaries){
            
            sum += salaries[key];
        }
console.log(sum);

//////////////////////////////////////////////////////////////////////


/**
 * @param {object} obj the given object.
 * @returns {object} it returns object by doubling the numeric values.
 */

function multiply(obj) {

    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}

//////////////////////////////////////////////////////////////////////////

// section object method this.//

/**
 * @returns {object} it returns object.
 */
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
    let user2 = makeUser();
    console.log( user2.ref.name );

///////////////////////////////////////////////////////////

//const prompt = require("prompt-sync")();

/**
 * @param {number} numb1 is the first number.
 * @param {number} numb2 is the second number.
 * @returns {number} returns the sum of two numbers.
 * @returns {number} returns the product of two numbers.
 */
let calculator = {
    sum() {
    return this.numb1 + this.numb2;
    },
    mul() {
    return this.numb1* this.numb2;
    },
    read() {
    this.a = +prompt("first_number?", 0);
    this.b = +prompt("second_number?", 0);
    }
};
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

////////////////////////////////////////////////////////////

/**
 * @param {number} step is number it starts from 0 intially.
 * @returns {number} whenever up is called it increments by 1 and down decrements by 1.
 */

let ladder = {
    step: 0,
    up() {
    this.step++;
    },
    down() {
    this.step--;
    },
    showStep: function() { 
    console.log( this.step );
    }
};

////////////////////////////////////////////////////////////////

// section constructor operator "new".

// yes it is possible //

/**
 * @returns {number} it returns the sum of two numbers.
 * @returns {number} it returns the product of two numbers.
 */
function Calculator1() {
    this.read = function() {
    this.num1 = +prompt("a?", 0);
    this.num2 = +prompt("b?", 0);
    };
    this.sum = function() {
    return this.num1 + this.num2;
    };
    this.mul = function() {
    return this.num1 * this.num2;
    };
}
    let calculator1 = new Calculator1();
    calculator1.read();
    console.log( "Sum=" + calculator.sum() );
    console.log( "Mul=" + calculator.mul() );

/////////////////////////////////////////////////////////////////

/**
 * @param {number} startingValue the first number.
 * @returns {number} value is the total sum of the numbers.
 * 
 */
function Accumulator1(startingValue) {
    this.value = startingValue;
    this.read = function() {
    this.value += +prompt("How much to add?", 0);
    };
}
let accumulator = new Accumulator1(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

////////////////////////////////////////////////////////////////