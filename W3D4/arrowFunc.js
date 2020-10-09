"use strict";
{
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(student => 
    // Error: Cannot read property 'title' of undefined
    console.log(this.title + ': ' + student)
    );
    }
   };

group.showList();

//////////////////////////////////////////////////////////////////////////////////////
//using bind

  let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(student => 
    // Error: Cannot read property 'title' of undefined
    console.log(this.title + ': ' + student)
    );
    }
   };

   group1.showList.bind(group1)();

}
