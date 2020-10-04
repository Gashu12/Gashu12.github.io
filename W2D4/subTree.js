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
  function contains(Node, target) {
    /* base case -- if children is null or empty */
    if (Node.descendents === []) {
        if (Node.value === target) {
            return Node;
        } else {
            return undefined;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (Node.value === target){
            return Node;
        } 
        for (let child of Node.descendents) {
            childResult = contains(child, target);
            if (childResult === Node) {
                return Node;
            }
        }
        return undefined; //did not find the target 
    }
  }
  console.log("testing abe, should be true: ", contains(abe, "Abe"));

  // 

  describe("contains", function(){

    it("returns the subtree if the node contains the target", function(){

        assert.deepEqual( contains(homer, "Homer"),  {
            value: 'Homer',
            descendents: [
               { value: 'Bart', descendents: [] },
               { value: 'Lisa', descendents: [] },
               { value: 'Maggie', descendents: [] }
            ] });

    });

    it("returns the subtree if the node contains the target", function(){

        assert.deepEqual( contains(abe, "Abe"),  {
            value: 'Abe',
            descendents: [{ value: 'Homer', 
            descendents: [
               { value: 'Bart', descendents: [] },
               { value: 'Lisa', descendents: [] },
               { value: 'Maggie', descendents: [] }] } 
        ] });

    });

    it("returns the subtree if the node contains the target", function(){

        assert.deepEqual( contains(lisa, "Lisa"),  {
            value: 'Lisa', descendents: []}
        );
    });
    
    it("returns undefind if the node dosen't contains the target", function(){

        assert.deepEqual( contains(homer, "Jhon"),
            undefined
        );
    });
    
});

}



