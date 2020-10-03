{
class TreeNode {
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);
  function contains(TreeNode, target) {
    /* base case -- if children is null or empty */
    if (TreeNode.descendents === []) {
        if (TreeNode.value === target) {
            return true;
        } else {
            return false;
        }
    } else { //reductive recursion step
        let childResult = false;
        if (TreeNode.value === target){
            return true;
        } 
        for (let child of TreeNode.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return false; //did not find the target 
    }
  }
  
  console.log(contains(abe, "Homer1"));
}