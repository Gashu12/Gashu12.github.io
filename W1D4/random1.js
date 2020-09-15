function readNumber(){
    let num;
    do{
        num = prompt("please enter a number: ", 0);
    }while(!isFinite(num));

    if(num === null || num === '')
    return +num;

}

console.log(`The number is: ${readNumber()}`);
function random1(min, max){

    let num = min - 0.5 + Math.random()*(max - min + 1);
    return Math.trunc(num);
}

console.log(random1(-11, -5));
console.log(random1(1, 3));