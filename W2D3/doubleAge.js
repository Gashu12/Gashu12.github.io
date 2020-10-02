{
    /**
     * 
     * @param {object} obj is the object.
     * @returns {object} it returns object of doubled age.
     * 
     */
    function mappedAge(obj){
        return obj.map(obj => obj.age*2);
    }
    
    const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
        "Barney", age: 80}];
    
    console.log(mappedAge(peopleArray));
    
    describe("mappedAge", function() {
        it("returns double age array", function() {
            const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name:
                 "Lucy", age: 13}, {name:
                "Barney", age: 80}];
      
          assert.deepEqual( mappedAge(peopleArray), [30, 12, 26, 160] );
        });
      
      });
}

