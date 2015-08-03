const assert = require('assert');
const BinarySearchTree = require('../lib/binary-search-tree.js')
const Node = require('../lib/node.js')

describe('Binary search tree', function() {
  it('should be a function', function(){
    assert.equal(typeof BinarySearchTree, 'function')
  })
  
  it('should be start with null root', function(){
    assert.equal(BinarySearchTree.root, null)
  })
  
  it('has a root node when one is inserted', function(){
    var bst = new BinarySearchTree;
    var node = new Node(10);
    bst.insert(node)
    assert.equal(bst.root, node)
  })
  
  it('has a root and another node when two are inserted', function(){
    var bst = new BinarySearchTree;
    var node = new Node(10);
    var node1 = new Node(8);
    bst.insert(node);
    bst.insert(node1);
    assert.equal(bst.root.left, node1)
  })
  
  it('has a root and another node when three are inserted', function(){
    var bst = new BinarySearchTree;
    var node = new Node(10);
    var node1 = new Node(8);
    var node2 = new Node(6);
    bst.insert(node);
    bst.insert(node1);
    bst.insert(node2);
    assert.equal(bst.root.left.left, node2)
  })
  
  it('has a root and another node when three are inserted to the right', function(){
    var bst = new BinarySearchTree;
    var node = new Node(10);
    var node1 = new Node(12);
    var node2 = new Node(14);
    bst.insert(node);
    bst.insert(node1);
    bst.insert(node2);
    assert.equal(bst.root.right.right, node2)
  })
  
  it('has a root and another node when three are inserted to the right and some to the left', function(){
    var bst = new BinarySearchTree;
    var node = new Node(10);
    var node3 = new Node(8);
    var node4 = new Node(7);
    var node1 = new Node(12);
    var node2 = new Node(14);
    bst.insert(node);
    bst.insert(node1);
    bst.insert(node2);
    bst.insert(node3);
    bst.insert(node4);
    assert.equal(bst.root.right.right, node2)
  })
});

describe('node', function() {
  it('should be a function', function(){
    assert.equal(typeof Node, 'function')
  })
  
  it('should be start with null right', function(){
    assert.equal(Node.right, null)
  })
  
  it('should be start with null left', function(){
    assert.equal(Node.left, null)
  })
  
  it('should be start with null value', function(){
    assert.equal(Node.value, null)
  })
});