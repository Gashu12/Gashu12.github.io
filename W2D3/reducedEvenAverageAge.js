{
/**
 * 
 * @param {object} obj is object.
 * @returns {number} it returns average of the even age in the object.
 */
function mappedObjAge(obj){
    return obj.map(obj => obj.age);
}

function filterEvenAge(value){
    return value.filter(element => element % 2 === 0);
}

function reducedAverageAge(arr){
    return arr.reduce((prev, current) => (prev + current), 0) / arr.length;
}

const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];

console.log(reducedAverageAge(filterEvenAge(mappedObjAge(peopleArray))));


describe("reducedAverageAge", function() {
    it("returns the reduced average even number of the array", function() {

        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}];

      assert.deepEqual( reducedAverageAge(filterEvenAge(mappedObjAge(peopleArray))), 43 );
    });
  
  });
}
