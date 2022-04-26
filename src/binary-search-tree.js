const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.head = null;
  }  

  root() {
    return this.head;
  }

  add(data) {
    
    let node = new Node(data);

    function addNode(pNode, pData) {

      if (pNode.data > pData) {
        if (pNode.left) {
          addNode(pNode.left, pData);
        } else {
            pNode.left = node;
            node.parent = pNode;
          }
      } else {
          if (pNode.right) {
            addNode(pNode.right, pData);
          } else {
              pNode.right = node;
              node.parent = pNode;
            }
        }
    } 

    if (!this.head) {
      this.head = node
    } else {
        addNode(this.head, data);
      }  
  }

  has(data) {
    
    function hasNode(pNode, pData) {

      if (pNode.data === pData) {return true;}
      if (pNode.data > pData) {
        if (pNode.left) {
          return hasNode(pNode.left, pData);
        } 
      } else {
          if (pNode.right) {
            return hasNode(pNode.right, pData);
          }
        }

      return false;
    } 
    return hasNode(this.head, data);
  }

  find(data) {

    function findNode(pNode, pData) {

      if (pNode.data === pData) {return pNode;}
      if (pNode.data > pData) {
        if (pNode.left) {
          return findNode(pNode.left, pData);
        } else {return null; }
      } else {
          if (pNode.right) {
            return findNode(pNode.right, pData);
          } else {return null; }
        }
    } 
    return findNode(this.head, data);
  }

  remove(data) {

    function minX(x) {
      if (x.left == null) {return x; }      
      return minX(x.left)
    }

    function removeNode(pNode, pData) {

      if (pNode == null) {return pNode; }
      if (pNode.data > pData) {pNode.left = removeNode(pNode.left, pData); }
      else if (pNode.data < pData) {pNode.right = removeNode(pNode.right, pData); }
           else if ((pNode.left != null) && (pNode.right != null)) {
                  pNode.data = minX(pNode.right).data
                  pNode.right = removeNode(pNode.right, pNode.data) 
                } else {
                    if (pNode.left != null) {pNode = pNode.left; }
                    else if (pNode.right != null) {pNode = pNode.right; }
                         else {pNode = null;}
                  }
      return pNode;
    } 
    return removeNode(this.head, data);
  }

  min() {
    function minNode(pNode) {
      if (pNode.left) {
        return minNode(pNode.left);
      } else {
        return pNode.data;
      }
    }      
    return minNode(this.head);
  }

  max() {
    function maxNode(pNode) {
      if (pNode.right) {
        return maxNode(pNode.right);
      } else {
        return pNode.data;
      }
    }      
    return maxNode(this.head);
  }
}

module.exports = {
  BinarySearchTree
};