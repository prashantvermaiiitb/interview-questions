/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head == null){
      return head;
  }
    var previous = null,current = head, successor = current.next;
    while(current !=null){
        successor = current.next;
        current.next = previous;
        previous = current;
        current = successor;
    }
    return previous;
};