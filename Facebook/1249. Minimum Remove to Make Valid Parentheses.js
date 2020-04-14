/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let openCount = (closeCount = 0);
  let i = 0;
  while (i < s.length) {
    if (s[i] === ")") {
      if (openCount <= closeCount) {
        s = s.slice(0, i) + s.slice(i + 1, s.length);
        i--;
      } else {
        closeCount++;
      }
    }
    if (s[i] === "(") {
      openCount++;
    }
    i++;
  }
  let diff = Math.abs(openCount - closeCount);
  let char = openCount > closeCount ? "(" : ")";
  i = s.length - 1;
  while (diff > 0) {
    if (s[i] === char) {
      s = s.slice(0, i) + s.slice(i + 1, s.length);
      diff--;
    }
    i--;
  }
  return s;
};

console.log(minRemoveToMakeValid("(a(b(c)d)"));
