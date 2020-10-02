{
    const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];
function mappedObjAge(obj){
    return obj.map(obj => obj.age);
}
/**
 * 
 * @param {object} obj is object.
 * @returns {number} it returns average of the odd age in the object.
 */
function filterOddAge(value){
    return value.filter(element => element % 2 !== 0);
}

function reducedAverageAge(arr){
    return arr.reduce((prev, current) => (prev + current), 0) / arr.length;
}

console.log(reducedAverageAge(filterOddAge(mappedObjAge(peopleArray))));

describe("reducedAverageAge", function() {
    it("returns the avrerage age of the odd age from the given obj", function() {

        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}];

      assert.deepEqual( reducedAverageAge(filterOddAge(mappedObjAge(peopleArray))), 14 );
    });
  
  });
}