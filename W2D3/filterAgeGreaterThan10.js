
{
/**
 * 
 * @param {object} obj is the given object.
 * @returns {object} it returns array of age value of the object.
 */
function mappedObj(obj){
 
    return obj.map(obj => obj.age);

}

function filteredAge(value){

    return value > 10;
}
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];
console.log(mappedObj(peopleArray).filter(filteredAge));

describe("filteredAge", function() {
    it("returns age greater than 10", function() {
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name:
             "Lucy", age: 13}, {name:
            "Barney", age: 80}];
  
      assert.deepEqual( mappedObj(peopleArray).filter(filteredAge), [15, 13, 80] );
    });
  
  });
}
