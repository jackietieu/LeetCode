/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let length = nums1.length + nums2.length,
    average = length % 2 === 0 ? 2 : 1,
    result,
    numLen1,
    numLen2;

  while (length != average) {
    if (nums1[0] >= 0 && nums2[0] >= 0) {
      if (nums1[0] < nums2[0]) {
        nums1.splice(0, 1);
      } else {
        nums2.splice(0, 1);
      }
    } else if (nums1[0]) {
      nums1.splice(0, 1);
    } else {
      nums2.splice(0, 1);
    }
    length--;
    numLen1 = nums1.length - 1;
    numLen2 = nums2.length - 1;
    if (nums1[numLen1] >= 0 && nums2[numLen2] >= 0) {
      if (nums1[numLen1] > nums2[numLen2]) {
        nums1.splice(numLen1, 1);
      } else {
        nums2.splice(numLen2, 1);
      }
    } else if (nums1[numLen1]) {
      nums1.splice(numLen1, 1);
    } else {
      nums2.splice(numLen2, 1);
    }
    length--;
  }

  if (length === 1) {
    if (nums1[0] >= 0) {
      return nums1[0];
    } else {
      return nums2[0];
    }
  } else {
    if (nums1[0] >= 0 && nums1[1] >= 0) {
      return (nums1[0] + nums1[1]) / 2.0;
    } else if (nums2[0] && nums2[1]) {
      return (nums2[0] + nums2[1]) / 2.0;
    } else {
      return (nums1[0] + nums2[0]) / 2.0;
    }
  }
};
