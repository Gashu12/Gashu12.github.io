{
/**
 * 
 * @param {object} arr is array of numbers.
 * @returns {number} it returns the reduced sum of numbers in the array.
 */
function reducedSum(arr){
    return arr.reduce((prev, current) => (prev + current), 0);
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
console.log(reducedSum(numArray));

describe("reducedSum", function() {
    it("returns reduced sum of the given array", function() {

        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

      assert.deepEqual( reducedSum(numArray), 422 );
    });
  
  });

}