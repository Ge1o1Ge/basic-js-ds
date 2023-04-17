const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
      return
    } else {
      const searchT = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return
          } else {
            return searchT(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return
          } else {
            return searchT(node.right)
          }
        } else {
          return null
        }
      }
      return searchT(this._root)
    }
  }

  has(data) {
    if (this._root === null) {
      return false;
    } else {
      const searchHas = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            return false;
          } else {
            return searchHas(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return false
          } else {
            return searchHas(node.right)
          }
        } else {
          return true
        }
      };
      return searchHas(this._root)
    }
  }

  find(data) {
    if (this._root === null) {
      return null;
    } else {
      const searchFind = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            return null;
          } else {
            return searchFind(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return null
          } else {
            return searchFind(node.right)
          }
        } else {
          return node
        }
      };
      return searchFind(this._root)
    }
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node === null) {
          return null;
        }

        if (node.left === null && node.right == null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data)
        return node
      }
    }
    this._root = removeNode(this._root, data)
  }

  min() {
    let tempNode = this._root;
    while (tempNode.left !== null) {
      tempNode = tempNode.left;
    }
    return tempNode.data;
  }

  max() {
    let tempNode = this._root;
    while (tempNode.right !== null) {
      tempNode = tempNode.right;
    }
    return tempNode.data;
  }
}

module.exports = {
  BinarySearchTree
};

let o = new BinarySearchTree()
o.add(9);
o.add(14);
o.add(6);
console.log(o.has(10));