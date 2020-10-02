  {
    /**
     * 
     * @param {number} n is a number.
     * @returns {number} it returns the sum of all the number down to 1.
     */
  function sumTo(n){
    if(n === 1){
        return n;
    } else{
      return n + sumTo(n-1);
    }
}

console.log(sumTo(100));

describe("sumTo", function() {
  it("returns the sum of all the number down to 1", function() {

    assert.deepEqual( sumTo(100), 5050 );
  });

});
}