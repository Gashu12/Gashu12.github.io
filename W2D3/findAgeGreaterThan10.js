{
/**
 * 
 * @param {object} obj is object.
 * @returns {object} it returns the first object which is age greater than 10.
 */
function findAgeGreaterThanTen(obj){
    return obj.find(obj => obj.age > 10)

}

const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];
console.log(findAgeGreaterThanTen(peopleArray))

describe("findAgeGreaterThanTen", function() {
    it("returns the first age object greater than 10", function() {
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name:
             "Lucy", age: 13}, {name:
            "Barney", age: 80}];
  
      assert.deepEqual( findAgeGreaterThanTen(peopleArray), {name: "Sam", age: 15} );
    });
  
  });

}





