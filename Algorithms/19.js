/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let trailingNode = head,
        leadingNode = head,
        length = 1;

    while (leadingNode.next) {
        length++
        leadingNode = leadingNode.next
        if (length - n > 1) {
            trailingNode = trailingNode.next
        }
    }

    if (length < n) {
        return []
    } else {
        if (length - n === 0) {
            return head.next
        } else {
            trailingNode.next = trailingNode.next.next
            return head
        }
    }
};
