function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

function hasCycle(head) {
  var flag = false;
  let fast = head;
  let slow = head;
  while (fast != undefined && fast.next != undefined) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (flag) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}

hasCycle(head);

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}
// printList(head);
