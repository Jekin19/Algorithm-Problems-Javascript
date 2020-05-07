function FindNumberWithDigit(num, start, end) {
  let result = [];
  if (!num || !start || !end) {
    return result;
  }
  while (start <= end) {
    let current = start;
    while (current > 0) {
      if (current % 10 === num) {
        result.push(start);
        break;
      }
      current = Math.floor(current / 10);
    }
    start++;
  }
  return result;
}

console.log(FindNumberWithDigit(3, 5, 23));
