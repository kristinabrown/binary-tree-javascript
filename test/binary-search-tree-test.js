const assert = require('assert');
const BinarySearchTree = require('../lib/binary-search-tree.js')

describe('Binary search tree', function() {
  it('should be a function', function(){
    assert.equal(typeof BinarySearchTree, 'function')
  })
  
  it('should be start with null root', function(){
    assert.equal(BinarySearchTree.root, null)
  })
});