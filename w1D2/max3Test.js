"use strict";
/* global pow assert max3 */
describe("maxOfThree", function() {

    it("max of 1 2 3 is 3", function() {
      assert.equal(3, maXOfThree(1, 2, 3));
    });

    it("max of 5  100 -44 is 100", function() {
        assert.equal(100, maXOfThree(-44, 5, 100));
    });
  
    it("max of 5  100 -44 is 100", function() {
        assert.equal(100, maXOfThree(-44, 5, 100));
    });
  
  });

  describe("sum", function() {
    it("sum of [1, 2] is 3", function() {
        assert.equal(3, sum([1, 2]));
    });
    
    it("sum of [4, 3] is 3", function() {
        assert.equal(7, sum([4, 3]));
    });

    it("sum of [-44, -36] is -80", function() {
        assert.equal(-80, sum([-44, -36]));
    });

  });

  describe("findLongestWord", function() {
    it("length of the longest word of ['hey', 'hello', 'good bye'] is 8", function() {
        assert.equal(8, findLongestWord(['hey', 'hello', 'good bye']));
    });
    
    it("length of the longest word of ['hey', 'this', 'that'] is 4", function() {
        assert.equal(4, findLongestWord(['hey', 'this', 'that']));
    });

    it("length of the longest word of ['good evening', 'hello', 'good bye'] is 12", function() {
        assert.equal(12, findLongestWord(['good evening', 'hello', 'good bye']));
    });

  });