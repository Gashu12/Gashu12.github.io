{
/**
 * 
 * @param {object} arr is array of numbers.
 * @returns {number} it returns reduced average number of the array.
 */
function reducedAvarage(arr){
    return arr.reduce((prev, current) => (prev + current), 0) / arr.length;
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
console.log(reducedAvarage(numArray));

describe("reducedAvarage", function() {
    it("returns the reduced average number of the array", function() {

        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

      assert.deepEqual( reducedAvarage(numArray), 52.75 );
    });
  
  });
}