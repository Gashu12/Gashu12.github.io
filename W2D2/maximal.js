"use strict";
/**
 * 
 * @param {object} salaries is the object.
 * @returns {string} it returns the name string which has the maximum salary.
 */
function topSalary(salaries) {

    let max = -Infinity;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
console.log(topSalary(salaries));

describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      assert.isNull( topSalary({}) );
    });
  });