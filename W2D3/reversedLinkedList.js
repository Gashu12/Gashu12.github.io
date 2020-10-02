{
    let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null} } } };
    /**
     * 
     * @param {object} list is the object.
     * @returns {number} it returns list of numbers.
     */
function printReversedList(list){
    let arr = [];
    let temp = list;
    while(temp){
        arr.push(temp.value);
        temp = temp.next;
    }

    for(let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }

}

console.log(printReversedList(list));
}