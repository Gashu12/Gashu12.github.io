{
/**
 * 
 * @param {object} obj is the object.
 * @returns {number} it returns the maximum age from the object.
 */
function mapAge(obj){
    return obj.map(obj => obj.age);
}

function maxAged(maxAge, currentAge){
    if(maxAge > currentAge){
        return maxAge;
    } else{
        return currentAge;
    }
}

const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];

console.log(mapAge(peopleArray).reduce(maxAged, 0));

describe("maxAged", function() {
    it("returns the max age from the given object", function() {

        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
            "Barney", age: 80}];

      assert.deepEqual( mapAge(peopleArray).reduce(maxAged, 0), 80 );
    });
  
  });
  
}