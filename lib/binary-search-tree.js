function BinarySearchTree() {
  this.root = null
}

BinarySearchTree.prototype.insert = function(node, currentNode){
   currentNode = typeof currentNode == 'undefined' ? this.root : currentNode;
  
  if(this.root == null){
    return this.root = node;
  } else if (node.value < currentNode.value) {
    if(currentNode.left == null) {
      return currentNode.left = node
    } else {
      currentNode = currentNode.left;
      this.insert(node, currentNode);
    }
  } else if (node.value > currentNode.value) {
    if(currentNode.right == null) {
      return currentNode.right = node
    } else {
      currentNode = currentNode.right;
      this.insert(node, currentNode);
    }
  }
}


module.exports = BinarySearchTree;