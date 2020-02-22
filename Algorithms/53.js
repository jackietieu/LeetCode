/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let i = 0,
    max,
    current,
    len = nums.length;

  for (i; i < len; i++) {
    if (!current) {
      current = nums[i];
      if (max === undefined || max < current) {
        max = current;
      }
      continue;
    }

    if (nums[i] > current) {
      if (current > 0) {
        current += nums[i];
      } else {
        current = nums[i];
      }
    } else {
      current += nums[i];
      if (max > current && current < 0) {
        current = undefined;
      }
    }

    if (current > max) {
      max = current;
    }
  }

  return max;
};
