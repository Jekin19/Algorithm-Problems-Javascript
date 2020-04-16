/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  if (!words || words.length === 0 || !order) {
    return false;
  }

  let map = new Map();
  let index = 0;
  for (let char of order) {
    map.set(char, index);
    index++;
  }

  for (let i = 0; i < words.length - 1; i++) {
    const firstWord = words[i];
    const secondWord = words[i + 1];
    let j = 0;
    while (j < Math.min(firstWord.length, secondWord.length)) {
      if (map.get(firstWord[j]) > map.get(secondWord[j])) {
        return false;
      } else if (map.get(firstWord[j]) < map.get(secondWord[j])) {
        break;
      } else {
        j++;
        if ((j === firstWord.length || j === secondWord.length) && firstWord.length > secondWord.length) {
          return false;
        }
      }
    }
    i++;
  }

  return true;
};

console.log(
  isAlienSorted(
    [
      "zezwvpdhkhc",
      "nldmzkh",
      "qvjpbis",
      "gxntgh",
      "knkdjzzxkv",
      "qyymcxdjut",
      "htjghmlc",
      "qxgxzmgbodnj",
      "hkmhfenu",
      "tlbjlaw",
    ],
    "pojvhubakxzqtlesmcwydinrfg"
  )
);
