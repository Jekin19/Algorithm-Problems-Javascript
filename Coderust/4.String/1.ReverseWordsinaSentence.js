let reverse = function(sentence, start, end) {
  while (start < end) {
    let temp = sentence[start];
    sentence[start] = sentence[end];
    sentence[end] = temp;
    start++;
    end--;
  }
};

let reverse_words = function(sentence = []) {
  // sentence here is an array of characters

  if (!sentence) {
    throw "Invalid input";
  }

  let reader = 0;
  while (reader < sentence.length) {
    while (sentence[reader] === " ") {
      reader++;
    }

    let endOfReader = reader;
    while (endOfReader < sentence.length && sentence[endOfReader] !== " ") {
      endOfReader++;
    }
    reverse(sentence, reader, endOfReader - 1);
    reader = endOfReader;
  }
  reverse(sentence, 0, sentence.length - 1);

  return sentence.join("");
};

let string_to_reverse_1 = "Hello World!";
let string_to_reverse_result_1 = reverse_words(Array.from(string_to_reverse_1));
console.log(string_to_reverse_1);
console.log(string_to_reverse_result_1);

console.log();

let string_to_reverse_2 = "Quick brown fox jumped over the lazy dog";
let string_to_reverse_result_2 = reverse_words(Array.from(string_to_reverse_2));
console.log(string_to_reverse_2);
console.log(string_to_reverse_result_2);
