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

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find duplicate num");
console.log("---------------------------------------");

const input = [9, 4, 9, 5, 7, 2, 8, 9, 3, 9];
console.log("input: " + input);
console.log(JSON.stringify(findDuplicate(input)));
console.log("---------------------------------------");
