
"use strict";

/**
 * 
 * @param {number} startTime a number of second  to count down
 * @returns {undefined}
 * side effect is to log out current number every second counting down to 0
 */

function stopWatch(startTime){

    let currentTime = startTime;

    const watchId = setInterval(logTime, 1000);

    function logTime(){
    
        console.log(currentTime);
        if(currentTime === 0){
            clearInterval(watchId);
        }
        currentTime = currentTime - 1;

    }

}

stopWatch(5)

