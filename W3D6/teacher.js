"use strict";

let Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}

let Teacher = function(){}
Teacher.prototype = new Person()
Teacher.prototype.teach = function(subject){

    console.log(this.name + " just teachs " + subject)
}

let Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
let me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

let teacher = new Teacher();
teacher.initialize("David", 45);
teacher.teach("Inheritance");

describe("Describe Techer", function() {
    it("returns the description of a teacher", function() {

        let teacher = new Teacher();
        teacher.initialize("David", 45);
      assert.deepEqual( teacher.describe(), "David, 45 years old." );
    });
  
  });

  describe("Describe Student", function() {
    it("returns the description of a student", function() {

        let student = new Student();
        student.initialize("Pete", 20);
      assert.deepEqual( student.describe(), "Pete, 20 years old." );
    });
  
  });

  describe("Teach", function() {
    it("returns the name of and the subject he/she teachs", function() {

        let prof = new Teacher();
      assert.deepEqual( prof.initialize("Johnson", 55), prof.teach("Javascript"), "Johnson just teachs Javascript" );
    });
  
  });

  describe("learn", function() {
    it("returns the name of a student and the subject he/she learned", function() {

        let stu = new Student();
      assert.deepEqual( stu.initialize("George", 22), stu.learn("Algorhisim"), "George just learned Algorhisim" );
    });
  
  });
