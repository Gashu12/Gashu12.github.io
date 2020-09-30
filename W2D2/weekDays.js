"use strict";
/**
 * 
 * @param {string} date is string of numbers.
 * @returns {string} it returns day string.
 */
{
function getWeekDay(date) {
    let days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDENSDAY', 'THURSDAY', 'FRIDAY', 'SATERDAY'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); //FEB 3 2014
  console.log(getWeekDay(date));

  describe("getWeekDay", function() {
    it("3 January 2014 - friday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 3)), 'FRIDAY');
    });
  
    it("4 January 2014 - saturday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 4)), 'SATERDAY');
    });
  
    it("5 January 2014 - sunday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 5)), 'SUNDAY');
    });
  
    it("6 January 2014 - monday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 6)), 'MONDAY');
    });
  
    it("7 January 2014 - tuesday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 7)), 'TUESDAY');
    });
  
    it("8 January 2014 - wednesday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 8)), 'WEDENSDAY');
    });
  
    it("9 January 2014 - thursday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 9)), 'THURSDAY');
    });
  });
}