"use strict";
{
const maggie = {value: "Maggie", next: null};
const lisa = {value: "Lisa", next: maggie};
const bart = {value: "Bart", next: lisa};
const homer = {value: "Homer", next: bart};
const abe = {value: "Abe", next: homer};

console.log(abe);

/**
 * 
 * @param {object} abe is the head of the object list
 * @param {string} target is the target value of the object
 * @returns {object} it returns the list node that contains the target
 */

function findListNode(abe, target) {
    //base case -- if children is null or empty 
    let currentList = abe;
    while(true){
        if(currentList.value === target){
            return currentList;
        } else {
            if(currentList.next === null){
                return null;
            }
        }

        currentList = currentList.next;
    }
  }

  console.log(findListNode(maggie, null));

}
