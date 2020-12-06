/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let numberOfNodes = 0;
    let current = head;
    while (current !== null) {
        numberOfNodes++;
        current = current.next;
    }
    // console.log(numberOfNodes);

    let positionFromStart = numberOfNodes - n;

    // console.log(positionFromStart);

    // if(positionFromStart == 0) {head = null;return head;}
    current = head;
    let previous = current;

    while (positionFromStart !== 0) {
        positionFromStart--;
        previous = current;
        current = current.next;

    }
    // console.log(current);
    // console.log(previous);

    if (current == head) {
        head = head.next; // removing the root node 
    } else if (current.next == null) {
        //removing the last node
        previous.next = null;
    } else {
        //removing the node in between
        previous.next = current.next;
    }
    return head;
};

function approach2() {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}