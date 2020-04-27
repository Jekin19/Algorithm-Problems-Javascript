/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.trie = { childrens: this.getChildrens() };
};

WordDictionary.prototype.getChildrens = function () {
  const childrens = [];
  for (let i = 0; i < 26; i++) {
    childrens.push(null);
  }
  return childrens;
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.trie;
  for (let char of word) {
    let index = char.charCodeAt(0) - "a".charCodeAt(0);
    if (node.childrens[index] === null) {
      node.childrens[index] = { childrens: this.getChildrens() };
    }
    node = node.childrens[index];
  }
  node.word = word;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let stack = [this.trie];
  for (let char of word) {
    let stackLength = stack.length,
      i = 0;
    if (stackLength <= 0) {
      return false;
    }
    while (i < stackLength) {
      let current = stack.shift();
      if (char === ".") {
        current.childrens.forEach((children) => {
          if (children !== null) {
            stack.push(children);
          }
        });
      } else {
        let index = char.charCodeAt(0) - "a".charCodeAt(0);
        if (current.childrens[index] !== null) {
          stack.push(current.childrens[index]);
        }
      }
      i++;
    }
  }

  if (word.includes(".")) {
    while (stack.length > 0) {
      const current = stack.pop();
      if (current.word && current.word.length === word.length) {
        return true;
      }
    }
    return false;
  } else {
    while (stack.length > 0) {
      if (stack.pop().word === word) {
        return true;
      }
    }
    return false;
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
console.log(wordDictionary.search(".at"));
wordDictionary.addWord("bat");
console.log(wordDictionary.search(".at"));
