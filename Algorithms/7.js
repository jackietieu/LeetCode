/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let max = Math.pow(2, 31),
    str = String(x),
    negative = x < 0 ? "-" : "",
    flipped = str
      .slice(negative ? 1 : 0)
      .split("")
      .reverse()
      .join("");

  if (max < +flipped) {
    return 0;
  } else {
    return +(negative + flipped);
  }
};
