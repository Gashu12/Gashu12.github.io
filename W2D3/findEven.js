{
/**
 * 
 * @param {object} arr is array of numbers.
 * @returns {number} it returns the first even number from the array.
 */
function findEven(arr){
    return arr.find(item => item % 2 === 0);
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
console.log(findEven(numArray));

describe("findEven", function() {
    it("returns the first even number from the array", function() {

        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

      assert.deepEqual( findEven(numArray), 0 );
    });
  
  });
}
