{
/**
 * 
 * @param {object} arr is array of numbers.
 * @returns {object} it returns array of even numbers.
 */
function filteredEven(arr){
    return arr.filter(element => element % 2 === 0);
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
console.log(filteredEven(numArray));

describe("filteredEven", function() {
    it("returns the even array of number", function() {

        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

      assert.deepEqual( filteredEven(numArray), [0, -20, 300, 2] );
    });
  
  });
}