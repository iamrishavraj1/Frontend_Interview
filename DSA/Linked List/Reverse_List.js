function Node(val) {
  this.val = val;
  this.next = null;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
printList(head);

function reverseLinkedList(head) {
  let curr = null;
  let prev = null;
  while (head) {
    curr = head;
    head = head.next;
    curr.next = prev;
    prev = curr;
  }

  return prev;
}


printList(reverseLinkedList(head));
