//Preorder - (Root,Left,Right)
function Node(data) {
  this.key = data;
  this.left = null;
  this.right = null;
}

function createTree() {
  let root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.right.left = new Node(40);
  root.right.right = new Node(50);
  return root;
}

// function preOrder(root) {
//   if (root != null) {
//     console.log(root.key + " ");
//     preOrder(root.left);
//       preOrder( root.right );
      
//   }
// }

function preOrder(root) {
  let ans = [];
  let stack = [root];
  if (root != null) {
    while (stack.length) {
      let curr = stack.pop();
      ans.push(curr);
      if (curr.right) {
        stack.push(curr.right);
      }
      if (curr.left) {
        stack.push(curr.left);
      }
      console.log(curr.key);
    }
  }
  return ans;
}

console.log(preOrder(createTree()));
