
const user = {name: 'John', age: 25, id: 123};
const newUser = {name1: 'pete', age1: 30, id1: 234};
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];

const combinedObj = {...user, ...newUser, ...peopleArray};

console.log(combinedObj);