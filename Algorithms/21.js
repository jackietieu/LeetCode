/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let current1 = l1,
    current2 = l2,
    temp;

  if (l1 === null && l2 === null) {
    return [];
  } else if (l2 === null) {
    return l1;
  } else if (l1 === null) {
    return l2;
  }

  while (current1 && current2) {
    if (current1.val < current2.val) {
      if (current1.next) {
        if (current1.next.val < current2.val) {
          current1 = current1.next;
        } else {
          temp = current1.next;
          current1.next = current2;
          current1 = temp;
        }
      } else {
        current1.next = current2;
        break;
      }
    } else {
      if (current2.next) {
        if (current2.next.val <= current1.val) {
          current2 = current2.next;
        } else {
          temp = current2.next;
          current2.next = current1;
          current2 = temp;
        }
      } else {
        current2.next = current1;
        break;
      }
    }
  }

  return l1.val < l2.val ? l1 : l2;
};
