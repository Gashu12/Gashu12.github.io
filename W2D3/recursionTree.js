{

"use strict";
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   }
   /**
    * 
    * @param {object} node is a tree node.
    * @returns {undefined}
    * it is just printing, not returning.
    */

   function printName(node){

    if(node.children === null){
        console.log(`${node.name}: ${node.value}`);
    } else{ // reductive recursion step
        console.log(`${node.name}: ${node.value}`);
        for(let child of node.children){
            printName(child);
        }
    }
        
}


printName(node1);
}