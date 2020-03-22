// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  if (!height || height.length === 0) {
    return area;
  }

  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let currentArea = Math.floor(Math.min(height[i], height[j]) * (j - i));
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }

    if (currentArea > area) {
      area = currentArea;
    }
  }

  return area;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Container With Most Water");
console.log("---------------------------------------");

const input = [10, 14, 10, 4, 10, 2, 6, 1, 6, 12];
console.log("input: " + input);
console.log(JSON.stringify(maxArea(input)));
console.log("---------------------------------------");
