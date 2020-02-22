/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [],
    len = nums.length,
    i = (k = j = 0),
    countHash = {};

  if (len < 3) {
    return [];
  }

  for (k; k < len; k++) {
    let val = nums[k];
    countHash[val] ? countHash[val]++ : (countHash[val] = 1);
  }

  for (i; i < len; i++) {
    let num1 = nums[i];
    countHash[num1]--;
    for (j = i + 1; j < len; j++) {
      let num2 = nums[j],
        difference = -(num1 + num2);
      countHash[num2]--;

      if (countHash[difference]) {
        result.push([num1, num2, difference].sort((a, b) => a - b));
      }
      countHash[num2]++;
    }
  }

  for (i = 0; i < result.length; i++) {
    let current = result[i].toString();
    for (j = i + 1; j < result.length; j++) {
      if (result[j].toString() === current) {
        result[j] = 0;
      }
    }
  }

  result = result.filter(a => a);
  result = result.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  return result;
};
