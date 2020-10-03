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
function recursionTree(TreeNode){

    if(TreeNode.value === []){
      console.log(TreeNode.value);
    } else{
      console.log(TreeNode.value);
      for(let child of TreeNode.descendents){
        recursionTree(child)
      }
    }
   }
  console.log(recursionTree(homer));

}