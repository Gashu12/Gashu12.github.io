{
/**
 * 
 * @param {number} y is a number.
 * @returns {number} it returns the fabonacci value of a number.
 */
function fabonacci(y){
    if(0 < y && y <= 2){
        return 1;
    } else{
        return fabonacci(y-1) + fabonacci(y-2);
    }
}

console.log(fabonacci(5));

describe("fabonacci", function() {
    it("returns the fabonacci number", function() {
  
      assert.deepEqual( fabonacci(7), 13 );
    });
  
  });
}