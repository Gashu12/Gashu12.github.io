{
    /**
     * 
     * @param {number} x is a number.
     * @returns {number} it returns the factorial of the number.
     */
function factorial(x){
    if(x === 1){
        return x;
    } else{
        return x * factorial(x-1);
    }

}

console.log(factorial(1));

describe("factoria", function() {
    it("returns the factorial of a number", function() {
  
      assert.deepEqual( factorial(5), 120 );
    });
  
  });
}