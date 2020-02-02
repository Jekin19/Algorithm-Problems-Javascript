/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let result = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= result) {
      result = i;
    }
  }
  return result === 0;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Jump Game");
console.log("---------------------------------------");

const input = [2, 0];
console.log("input: " + input);
console.log(canJump(input));
console.log("---------------------------------------");

const input2 = [2, 3, 1, 1, 4];
console.log("input2: " + input2);
console.log(canJump(input2));
console.log("---------------------------------------");
