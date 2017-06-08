/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [],
        len = nums.length,
        i = k = 0,
        j = 1,
        countHash = {};

    for (k; k < len; k++) {
        let val = nums[k];
        countHash[val] ? countHash[val]++ : countHash[val] = 1;
    }

    for (i; i < len; i++) {
        let num1 = nums[i]
        for (j; j < len; j++) {
            let num2 = nums[j],
                difference = -(num1 + num2);

            if (countHash[difference]) {
                result.push([num1, num2, difference].sort((a, b) => a - b))
            }
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

    return result.filter(a => a).reverse();
};
