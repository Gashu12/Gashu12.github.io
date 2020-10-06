"use strict";

/**
 * 
 * @param {number} toDay is a number. 
 * @returns {undefined} it returns undefined
 */

function examDate(toDay){

    let currentDate = toDay;
    const nextDay = setInterval(dayleft, 1000);

    function dayleft(){
        console.log(currentDate);
        if(currentDate === 7){
            clearInterval(nextDay);
            console.log("OCT " + currentDate + " @ 4:00 AM will begin the exam")
        }
        currentDate = currentDate + 1;
    }

}

examDate(5);



/**
 * 
 * @param {number} fromDecFirst is a the first number
 * @param {number} xMas is the last number
 */

function printDay(fromDecFirst, xMas) {
    let thatDay = fromDecFirst;
  
    let dateId = setInterval(function() {
      console.log(thatDay);
      if (thatDay == xMas) {
          console.log("the total days Are: " + (xMas - fromDecFirst));
        clearInterval(dateId);
      }
      thatDay++;
    }, 10);
  }
  
  // usage:
  printDay(1, 25);
