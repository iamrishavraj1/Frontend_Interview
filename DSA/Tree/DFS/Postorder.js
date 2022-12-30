//Postorder - (Left,Right,Root)
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

// function postOrder(root) {
//   if (root != null) {
//     postOrder(root.left);
//     postOrder(root.right);
//     console.log(root.key + " ");
//   }
//   return root;
// }

function postOrder(root) {
 
}

console.log(postOrder(createTree()));
