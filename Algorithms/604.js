/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
  this.str = "";
  this.itr = 0;
  let len = compressedString.length;
  for (let i = 0; i < len; i += 2) {
    this.str += compressedString[i].repeat(+compressedString[i + 1]);
  }
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
  this.itr++;
  return this.str[this.itr - 1];
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  return Boolean(this.str[this.itr]);
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = Object.create(StringIterator).createNew(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
