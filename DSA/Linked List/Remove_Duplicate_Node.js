function Node(val) {
  this.val = val;
  this.next = null;
}
let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
printList(head);

function removeNode(head) {
  if (head === null) return head;
  let curr = head;
  while (curr) {
    if (curr.next != null && curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

printList(removeNode(head));
