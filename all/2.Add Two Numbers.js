/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const resNode = new ListNode(0);
  let p = resNode;
  let plus = 0;
  while (l1 || l2 || plus) {
    let tmp = 0;
    if (l1) {
      tmp += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      tmp += l2.val;
      l2 = l2.next;
    }
    tmp += plus;
    if (tmp >= 10) {
      tmp -= 10;
      plus = 1;
    } else plus = 0;
    p.next = new ListNode(tmp);
    p = p.next;
  }
  return resNode.next;
};

l1 = new ListNode(2, new ListNode(4, new ListNode(5, new ListNode(3))));
l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

function printListNode(l) {
  while (l) {
    console.log(l.val);
    l = l.next;
  }
}
printListNode(addTwoNumbers(l1, l2));
