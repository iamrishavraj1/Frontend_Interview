// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let list1 = new ListNode();
// let list2 = new ListNode();
// list1.addToTheLast(new ListNode(1));
// list1.addToTheLast(new ListNode(2));
// list1.addToTheLast(new ListNode(4));
// list2.addToTheLast(new ListNode(1));
// list2.addToTheLast(new ListNode(3));
// list2.addToTheLast(new ListNode(4));
// function addToTheLast(node)
// {
//   if (this.head == null) {
//     this.head = node;
//   } else {
//     let temp = this.head;
//     while (temp.next != null) temp = temp.next;
//     temp.next = node;
//   }
// }
// function mergeTwoList(list1, list2) {
//   let ans = new ListNode(0);
//   let curr = ans;
//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       curr.next = list1;
//       list1 = list1.next;
//     } else {
//       curr.next = list2;
//       list2 = list2.next;
//     }
//   }
//   if (list1 != undefined) {
//     curr.next = list1;
//   } else {
//     curr.next = list2;
//   }

//   return ans.next;
// }

// mergeTwoList(list1, list2);

// function printList(head) {
//   let curr = head;
//   while (curr) {
//     console.log(curr.val);
//     curr = curr.next;
//   }
// }
// printList(list1);
