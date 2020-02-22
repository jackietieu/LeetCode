/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  let reverse = 0,
    original = x;

  while (x) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return reverse === original;
};
