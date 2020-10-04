"use strict";
{

class ListNode {

    constructor(value, next = null){
      this.value = value;
      this.next = next;
    }
 
  }
 
  class linkedList{
    constructor(){
      this.head = null;
      this.size = 0;
    }
 
    insertFirst(value){
      this.head = new ListNode(value, this.head)
      this.size++;
    }

  printListValue() {
    let current = this.head;

    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

  }




  const nam = new linkedList();
 
  nam.insertFirst('Maggie');
  nam.insertFirst('Lisa');
  nam.insertFirst('Bart');
  nam.insertFirst('Homer');
  nam.insertFirst("Abe");

nam.printListValue();
}
/*
let [name1, name2, ...remaining] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(`${remaining[0]} ${remaining[1]}`);
*/