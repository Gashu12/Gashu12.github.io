{
/**
 * 
 * @param {number} max it the maximum number.
 * @param {number} current is the current number.
 * @returns {number} it returns the maximum number from the array.
 */
function findMax(max, current){
    if(max > current){
        return max;
    } else{
        return current;
    }
}

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
console.log(numArray.reduce(findMax, -Infinity));

describe("findMax", function() {
    it("returns the max number from the array", function() {

        const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

      assert.deepEqual( numArray.reduce(findMax, -Infinity), 300 );
    });
  
  });

}