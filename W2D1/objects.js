/////////////////////////////////////////////////////////////////////
"use strict";
// yes it is possible //

/**
 * @param {object} obj is input pbject litral.
 * @returns {boolean} it returns boolean values.
 */

let obj = {};

function X(){ return obj; }
function Y(){ return obj; }

console.log(new X() == new Y());

////////////////////////////////////////////////////////////////////

/**
 * @param {number} a is the first number.
 * @param {number} b is the second number.
 * @returns {number} it returns the sum of two numbers.
 * @returns {number} it returns the product of two numbers.
 */
function Calculator() {
    this.read = function() {
    this.x = +prompt("x?", 0);
    this.y = +prompt("y?", 0);
    };
    this.sum = function() {
    return this.x + this.y;
    };
    this.mul = function() {
    return this.x * this.y;
    };
}
    let calculator = new Calculator();
    calculator.read();
    console.log( "Sum=" + calculator.sum() );
    console.log( "Mul=" + calculator.mul() );

/////////////////////////////////////////////////////////////////

/**
 * 
 * 
 * @param {number} startingValue the first number.
 * @returns {number} value is the total sum of the numbers.
 * 
 */
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
    this.value += +prompt("How much to add?", 0);
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

///////////////////////////////////////////////////////////////////