/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null;

  let l3 = new ListNode(),
    current = l3;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.val = l1.val;
      l1 = l1.next;
    } else {
      current.val = l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode();
    current = current.next;
  }

  // console.log(l3);
  // console.log(current);

  while (l1 !== null) {
    current.val = l1.val;
    l1 = l1.next;
    if (l1 !== null) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  // console.log(l3);
  // console.log(current);

  while (l2 !== null) {
    current.val = l2.val;
    l2 = l2.next;
    if (l2 !== null) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  // console.log(l3);
  // console.log(current);

  return l3;
};
