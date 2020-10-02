{
/**
 * 
 * @param {object} arr is array of numbers.
 * @returns {object} it returns array of numbers each element doubled.
 */
function doubleArray(arr){
    return arr.map(element => element + element);
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
console.log(doubleArray(numArray));

describe("doubleArray", function() {
    it("returns double array", function() {
        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
  
      assert.deepEqual( doubleArray(numArray), [10, 0, 14, 154, -40, 600, 102, 4] );
    });
  
  });
}