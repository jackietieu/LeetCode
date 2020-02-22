/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function(words, maxWidth) {
  let result = [],
    wordsSeparatedByLine = [],
    currentLineLength = 0,
    currentWordLength = 0,
    currentLine = 0;

  words.forEach((word, i) => {
    currentWordLength = word.length;

    if (wordsSeparatedByLine[currentLine]) {
      if (currentWordLength + currentLineLength + 1 <= maxWidth) {
        wordsSeparatedByLine[currentLine] = wordsSeparatedByLine[currentLine]
          ? wordsSeparatedByLine[currentLine].concat(word)
          : [word];
        currentLineLength += currentWordLength + 1;
      } else if (
        word.length + currentLineLength + 1 > maxWidth ||
        (words[i + 1] &&
          currentLineLength + currentWordLength + words[i + 1] >= maxWidth)
      ) {
        currentLine++;
        currentLineLength = currentWordLength;
        wordsSeparatedByLine[currentLine] = [word];
      }
    } else {
      wordsSeparatedByLine[currentLine] = [word];
      currentLineLength += currentWordLength;
    }
  });

  result = wordsSeparatedByLine.map((line, i) =>
    addSpaces(line, maxWidth, wordsSeparatedByLine[i + 1] ? false : true)
  );

  return result;
};

function addSpaces(array, maxWidth, lastLine) {
  let result = "",
    charsInLine = totalCharsPerLine(array),
    wordsInLine = array.length,
    spacesNeeded = maxWidth - charsInLine,
    setsOfSpaces = wordsInLine - 1,
    spaceLengths = spaceLengthSets(spacesNeeded, setsOfSpaces);

  if (lastLine) {
    let lastLineJustified = array.reduce(
      (result, word) => (result ? result + ` ${word}` : word),
      ""
    );
    lastLineJustified += " ".repeat(maxWidth - lastLineJustified.length);
    return lastLineJustified;
  }

  if (array.length === 1) {
    return array[0] + " ".repeat(maxWidth - array[0].length);
  } else if (array.length === 2) {
    return (
      array[0] +
      " ".repeat(maxWidth - array[0].length - array[1].length) +
      array[1]
    );
  }

  result = array.reduce(
    (result, word, i) =>
      result + (word + (spaceLengths[i] ? " ".repeat(spaceLengths[i]) : "")),
    ""
  );

  return result;
}

function totalCharsPerLine(array) {
  return array.reduce((sum, word) => sum + word.length, 0);
}

function spaceLengthSets(spacesNeeded, setsOfSpaces) {
  let result = new Array(setsOfSpaces).fill(0),
    spacesToAdd = spacesNeeded;

  if (setsOfSpaces < 1) {
    return spacesNeeded;
  }

  while (spacesToAdd > 0) {
    for (let i = 0; spacesToAdd > 0 && i < setsOfSpaces; i++) {
      result[i]++;
      spacesToAdd--;
    }
  }

  return result;
}
