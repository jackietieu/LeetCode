/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var pointerA = head,
        pointerB = head,
        len = 0,
        newHead,
        i;

    if (head === null) {
        return null;
    }

    while (pointerA) {
        pointerA = pointerA.next;
        len++;
    }

    k = k % len;

    if (k === 0 || len === 1) {
        return head;
    }

    pointerA = head;
    for (i = 0; i < k; i++) {
        pointerA = pointerA.next;
    }

    while (pointerA && pointerA.next) {
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }

    newHead = pointerB.next;
    pointerB.next = null;
    pointerA.next = head;

    return newHead;
};
