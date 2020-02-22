/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort();
  let i = 0,
    longestStr = strs[0] || "",
    shortestStr = strs[strs.length - 1] || "";

  for (i; i < shortestStr.length; i++) {
    if (longestStr[i] !== shortestStr[i]) {
      break;
    }
  }

  return shortestStr.substr(0, i);
};
