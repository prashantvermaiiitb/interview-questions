/**
 * checking whether linked list has cycles or not
 * create a map
 * key -> reference
 * val -> pos
 * we circle or iterate over the linked list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  return cycleAtPosition(head) !== -1;
};

var cycleAtPosition = function (head) {
  if (head === null || head.next === null) return -1; // [] / [1]
  let current = head,
    pos = 0;
  let referencePositionMap = new Map();
  while (!referencePositionMap.has(current) && current !== null) {
    referencePositionMap.set(current, pos);
    current = current.next;
    pos++;
  }
  //console.log(pos)
  //console.log(referencePositionMap.has(current))
  //console.log(referencePositionMap.get(current))
  return referencePositionMap.has(current)
    ? referencePositionMap.get(current)
    : -1;
};
/**
 * if 1 node or null --> false
 * if > 1 then we will be having to pointers
 * 1 slow
 * 1 fast
 * while slow will be moving 1 step at a time
 * fast will be moving 2 steps at a time
 * @param {*} head
 */
var hasCycleTwoPointer = function (head) {
  if (head == null || head.next === null) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
