
///////////////////////////////////////////////////////////////////////////////////////

"use strict";

/**
 * 
 * @param {string} str is string of words.
 * @returns {string} it returns of words.
 */

function custemize(str){
    return str
        .split("-")
        .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)

        )
        .join("");
}

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {object} arr array of numbers.
 * @param {number} a minimum value of the elements.
 * @param {number} b maximum value of the elements.
 */
function filterRange(arr, a, b){
    return (item => (a <= item && item <= b));
}

////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {object} arr array of numbers.
 * @param {number} a minmum range of the number.
 * @param {number} b maximum range of the number.
 * @returns {object} it returns filtered object.
 */

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        let val = arr[i];
        if(val < a || val > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {object} arr array of numbers.
 * @returns {object} it returns array of numbers in decending order. 
 */
function sorted(arr){
    return arr.sort((a, b) => (b - a));
}

////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * @param {object} arr array of strings.
 * @returns {object} it returns  
 */

function copySorted(arr) {
    return arr.slice().sort();
    }

///////////////////////////////////////////////////////////////////////////////////////////////////



function Calculator() {
    let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
    };
    this.calculate = function(str) {
    let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2]
    if (!methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
    }
    return methods[op](a, b);
    }
    this.addMethod = function(name, func) {
    methods[name] = func;
    };
}

////////////////////////////////////////////////////////////////////////////////////////////

let george = { name: "George", age: 25 };
let david = { name: "David", age: 30 };
let mark = { name: "Mark", age: 28 };
let users = [ george, david, mark ];
let names = users.map(item => item.name);
let ages = users.map(item => item.age);

console.log(names);
console.log(ages);

///////////////////////////////////////////////////////////////////////////////////////////////

let terry = { name: "Terry", surname: "Smith", id: 1 };
let chris = { name: "Chris", surname: "Hunt", id: 2 };
let suzy = { name: "Suzy", surname: "Key", id: 3 };
let users1 = [ terry, chris, suzy ];
let usersMapped = users1.map(user => ({
fullName: `${user.name} ${user.surname}`,
id: user.id
}));
/*
usersMapped = [
{ fullName: "Terry Smith", id: 1 },
{ fullName: "Chris Hunt", id: 2 },
{ fullName: "Suzy Key", id: 3 }
]
*/

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );

//////////////////////////////////////////////////////////////////////////////////////////////////

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let arr = [ pete, john, mary ];
    sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

///////////////////////////////////////////////////////////////////////////////////////////////////

function shuffle(array) {

    array.sort(() => Math.random() - 0.5);

}
  
  let arr1 = [1, 2, 3, 4, 5];
  shuffle(arr1);
  console.log(arr1.join(''));// this is as a redused version of shuffle array.
  console.log(arr1);

///////////////////////////////////////////////////////////////////////////////////////////////////

function getAverageAge(users){

    return users.reduce((prev, user) => (prev + user.age), 0) / users.length;
}

let John = { name: "John", age: 28 };
let Pete = { name: "Pete", age: 30 };
let Mary = { name: "Mary", age: 32 };

let arr2 = [ John, Pete, Mary ];

console.log( getAverageAge(arr2) );

////////////////////////////////////////////////////////////////////////////////////////////////////

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) );

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  let users2 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  let usersById = groupById(users2);

  console.log(usersById);

 ////////////////////////////////////////////////////////////////////////////////////////////////////////