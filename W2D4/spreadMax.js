const myArray = [1, 2, 3, 6, 5];

console.log(Math.max(...myArray));

function makeWorker() {
    let name = "John";
    return function() {
    console.log(name);
        }
    }
    name = "Pete";
    // create a function
    let work = makeWorker();
    // call it
    work(); 