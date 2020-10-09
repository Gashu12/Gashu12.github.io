"use strict";
///////////////////////////////////////////////////////////////////
//question #1
function apple(value){
    return 2*value;
}

function banana(value){
    return 3*value;
}

// i lost 1 point here due to function name i used xyz and abc.
//////////////////////////////////////////////////////////////////
//question #

// i missed 2 point here arrow function is best caracterized by function expretion.
//////////////////////////////////////////////////////////////////////
//question #6

// after 2000 second nothing will be desplayed. missed 1 point.
//////////////////////////////////////////////////////////////////////
//question #7

/* for "this" inside return value 
const myperim = shape.perimetre;
myperim(); // global window will desplay in case of strict mode.
 but it will be undefined for non strict mode i lost 2 point here.
*/
///////////////////////////////////////////////////////////////////
//question #8

let john = { name: "John", surName: 'smith', age: 25 };
let pete = { name: "Pete", surName: 'hunt', age: 30 };
let mary = { name: "Mary", surName: 'jonson' ,age: 28 };

let people = [ john, pete, mary ];

let mapped = people.map(people => `{fullName: ${people.name} ${people.surName}, age: ${people.age}}`);
console.log(mapped);

// i lost 4 point here it is to much first i was trying by my on map method anyways.

///////////////////////////////////////////////////////////////////
//question #9
let numArray = [55, 44, 1, 33];
let reducedArray = numArray.reduce((a, b) => a < b ? a : b, Infinity);
console.log(reducedArray);

// i lost 1 point here

//////////////////////////////////////////////////////////////////
//question #10


let reduc = people.reduce((a, b) => a < b.age? a : b.age ,Infinity);
console.log(reduc);
// i lost 4 point here but i did it by my own reduce method it's okay.

//////////////////////////////////////////////////////////////////////
//question #13

let node4 = { name: "label", children: null};
let node5 = { name: "input", children: null};
let node3 = { name: "p", children: null};
let node2 = { name: "div", children: [node4, node5]};
let node1 = { name: "body", children: [node2, node4]};

function classAdder(node){

    if(node.children === null){
        (node.class = "classNode");
    }else {
        (node.class = "classNode");
        for(const ele of node.children){
            classAdder(ele);
        }
    }
    return node;
}


console.log(classAdder(node2));


//////////////////////////////////////////////////////////////////////
//question #16

function makeAccount(){
    let balance = 0;

    return function(op, value){
        if(op === "add"){
            balance += value; 
        } else {
            if(op === "debit"){
                balance -= value;
            }
        }

        return balance;
    }

    
}

const account = makeAccount();
console.log(account("add", 50));
console.log(account("debit", 25));

// i lost 2 point here i coded it a litle differ from this.

////////////////////////////////////////////////////////////////////////
// question #18

function tenClock(){
    let tickCount = 10;

    const watchId = setInterval(logTime, 1000);
    function logTime(){
        const currentTime = new Date()
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        console.log(`${hours}:${minutes}:${seconds}`);

        if(tickCount === 0){
            clearInterval(watchId)
        } else {
            tickCount = tickCount - 1
        }
    }

}

tenClock();

////////////////////////////////////////////////////////////////////


