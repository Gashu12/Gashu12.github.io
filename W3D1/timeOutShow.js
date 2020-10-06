/////////////////////////////////////////////////////////////////////////////////////

"use strict";

let i = 0;

setTimeout(() => console.log(i), 100); /* it will show 100000000 that is the max number
    from the for loop condition.
*/

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}