///////////////////////////////////////////////////////////
"use strict";

/**
 * @returns {number} it returns number
 */

function makeWorker() {
    //let name = "John";
    return function() {
    console.log(name);
    };
    }
    let name = "Pete";
    // create a function
    let work = makeWorker();
    // call it
    (work()); 
    name = "is this work?";
    work();
    let count = 10;
    function makeCounter(){
        //let count = 0;
        return function(){
            return count++;
        }
    }

    let counter = makeCounter();
    console.log(counter());
    count = 50;// ignored
    console.log(counter());