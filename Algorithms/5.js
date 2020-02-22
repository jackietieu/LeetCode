// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longestPal = "",
    longestPalLength = 0,
    currStr = "",
    currCenterPos = 0,
    i = 0;

  while (s && currCenterPos < s.length) {
    // odd pal length
    currStr = s[currCenterPos];

    for (i = 1; s[currCenterPos - i] && s[currCenterPos + i]; i++) {
      if (
        s[currCenterPos - i] &&
        s[currCenterPos + i] &&
        s[currCenterPos - i] === s[currCenterPos + i]
      ) {
        currStr = s[currCenterPos - i] + currStr + s[currCenterPos + i];
      } else {
        break;
      }
    }

    if (currStr.length > longestPalLength) {
      longestPal = currStr;
      longestPalLength = currStr.length;
    }

    // odd pal length
    if (
      s[currCenterPos] &&
      s[currCenterPos + 1] &&
      s[currCenterPos] === s[currCenterPos + 1]
    ) {
      currStr = s[currCenterPos] + s[currCenterPos + 1];

      for (i = 1; s[currCenterPos - i] && s[currCenterPos + i + 1]; i++) {
        if (
          s[currCenterPos - i] &&
          s[currCenterPos + i + 1] &&
          s[currCenterPos - i] === s[currCenterPos + i + 1]
        ) {
          currStr = s[currCenterPos - i] + currStr + s[currCenterPos + i + 1];
        } else {
          break;
        }
      }

      if (currStr.length > longestPalLength) {
        longestPal = currStr;
        longestPalLength = currStr.length;
      }
    }

    currCenterPos++;
  }

  return longestPal;
};
