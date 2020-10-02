{
  let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null} } } };
/**
 * 
 * @param {object} list is the object.
 * @returns {number} it returns list of numbers.
 */
function printList(list){
  let temp = list;
  while(temp){
      console.log(temp.value);
      temp = temp.next;
  }
}

console.log(printList(list));

}