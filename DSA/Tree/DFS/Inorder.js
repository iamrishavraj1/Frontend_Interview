//Inorder - (Left,Root,Left)

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

// ! RECURSIVE METHOD
// function inOrder(root) {
//   if (root != null) {
//     inOrder(root.left);
//     console.log(root.key + " ");
//     inOrder(root.right);
//   }
// }
// ! NON-RECURSIVE METHOD

function inOrder(root) {
  let ans = [];
  let stack = [];
  let curr = root;
  if (root != null) {
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      ans.push(curr.key);
      console.log(ans);
      curr = curr.right;
    }
  }

  return ans;
}

console.log(inOrder(createTree()));

// console.log(createTree().left.key);
// console.log(createTree().key);
// console.log( createTree().right.key );
