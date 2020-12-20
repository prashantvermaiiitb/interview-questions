/**
 * determine whether a given linkedlist is a palindrome or not.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Using stack for checking the linked list is palindrome or not
 * Put all the nodes in the Stack in one loop O(N)
 * Now pop-off the items are and compare in another loop O(N)
 * O(2N) = O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true;
  } else {
    let stack = [];
    let current = head;
    while (current !== null) {
      stack.push(current.val);
      current = current.next;
    }
    console.log(stack);
    current = head;
    while (current !== null) {
      if (stack.length === 0 || stack.pop() !== current.val) {
        return false;
      }
      current = current.next;
    }
    return true;
  }
};

/**
 * you have to reach to the middle of the linkedList
 * check for the even or odd number of nodes -> fast pointer null or not-null
 * have to store the mid node in-case list has to be restored
 * compare the list and send back the response
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next == null) return true;

  let { previous, slow, middle, fast } = getMiddleOfList(head); // O(N)
  // console.log( previous, slow, middle, fast );

  let newStart = reverseList(slow); //O(N)
  // console.log(newStart);

  let isPalindrome = compareList(newStart, head); //O(N)
  // console.log(isPalindrome);
  return isPalindrome;
};

function compareList(root1, root2) {
  while (root1 !== null && root2 !== null) {
    if (root1.val === root2.val) {
      root1 = root1.next;
      root2 = root2.next;
    } else {
      return false;
    }
  }
  //if both of them are null
  if (root1 === null && root1 === null) {
    return true;
  }
  return false;
}

function reverseList(node) {
  let current = node,
    previous = null,
    next;
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

/**
 * Getting middle of the list along-with slow / fast pointer.
 * @param {*} head
 */
var getMiddleOfList = function (head) {
  let slow = head,
    fast = head,
    middle = null,
    previous = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    previous = slow;
    slow = slow.next;
  }
  //only when odd number of nodes
  if (fast !== null) {
    middle = slow;
    slow = slow.next;
  }
  previous.next = null; // terminating the list as it's
  return { previous, slow, middle, fast };
};
