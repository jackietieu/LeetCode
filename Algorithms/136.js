/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(A) {
  var length = A.length,
    i,
    result = 0;
  if (length === 1) {
    return A[0];
  }
  for (i = 0; i < length; i++) {
    result = result ^ A[i];
  }
  return result;
};
