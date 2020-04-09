/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // Find the letersection polet of the two runners.
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  // Find the "entrance" to the cycle.
  let ptr1 = nums[0];
  let ptr2 = tortoise;
  while (ptr1 != ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
};

var findDuplicate2 = function(nums) {
  for (let num of nums) {
    let index = Math.abs(num) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    } else {
      return num;
    }
  }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find duplicate num");
console.log("---------------------------------------");

const input = [1, 3, 4, 2, 2];
console.log("input: " + input);
console.log(JSON.stringify(findDuplicate(input)));
console.log(JSON.stringify(findDuplicate2(input)));
console.log("---------------------------------------");
