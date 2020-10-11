"use strict";
////////////////////////////////////////////////////////////////////////

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head

};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table

};

let pockets = {
    money: 2000,
    __proto__: bed

};

console.log(pockets.pen);

/* the answer for the 2nd question is there is no effect between 
    getting head.glasses and pocketes.glasses in modern engine performance wise,
        i thought head.glasses is faster than pocketes.glasses from glasses property.
*/

///////////////////////////////////////////////////////////////////////////////