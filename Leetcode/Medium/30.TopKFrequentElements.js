// https://leetcode.com/problems/top-k-frequent-elements/solution/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let result = [];
  if (!nums || nums.length === 0) {
    return result;
  }

  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      let count = map.get(num);
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }

  let heap = new MaxHeap((a, b) => a[1] - b[1]);
  for (let keyValue of map) {
    heap.insert(keyValue);
  }

  while (k > 0) {
    result.push(heap.extractMax()[0]);
    k--;
  }
  return result;
};

function MaxHeap(comparator) {
  this.comparator =
    comparator ||
    function(a, b) {
      return a - b;
    };
  this.heap = [];
  this.getLength = function() {
    return this.heap.length;
  };

  this.getHeap = function() {
    return this.heap;
  };

  this.getMax = function() {
    return this.heap.length > 0 ? this.heap[0] : null;
  };
  // Add the element to the bottom level of the heap at the most left.
  // Compare the added element with its parent; if they are in the correct order, stop.
  // If not, swap the element with its parent and return to the previous step.
  this.insert = function(x) {
    this.heap.push(x);

    let insertedIndex = this.heap.length - 1;
    while (insertedIndex > 0) {
      let parentIndex = Math.floor((insertedIndex - 1) / 2);
      if (this.comparator(this.heap[insertedIndex], this.heap[parentIndex]) > 0) {
        // if (this.heap[insertedIndex] > this.heap[parentIndex]) {
        // swap
        [this.heap[parentIndex], this.heap[insertedIndex]] = [this.heap[insertedIndex], this.heap[parentIndex]];
        insertedIndex = parentIndex;
      } else {
        break;
      }
    }
  };

  // Replace the root of the heap with the last element on the last level.
  // Compare the new root with its children; if they are in the correct order, stop.
  // If not, swap the element with one of its children and return to the previous step. (Swap with its smaller child in a min-heap and its larger child in a max-heap.)
  this.extractMax = function() {
    if (this.getLength() > 1) {
      const max = this.heap[0];
      const lastElement = this.heap.pop();
      this.heap[0] = lastElement;
      let currentIndex = 0;
      let largestIndex = currentIndex;
      while (currentIndex < this.heap.length) {
        let leftChildIndex = Math.floor(2 * currentIndex + 1);
        let rightChildIndex = Math.floor(2 * currentIndex + 2);

        if (
          leftChildIndex < this.heap.length &&
          this.comparator(this.heap[currentIndex], this.heap[leftChildIndex]) < 0
          // this.heap[currentIndex] < this.heap[leftChildIndex]
        ) {
          largestIndex = leftChildIndex;
        }
        if (
          rightChildIndex < this.heap.length &&
          this.comparator(this.heap[currentIndex], this.heap[rightChildIndex]) < 0 &&
          this.comparator(this.heap[largestIndex], this.heap[rightChildIndex]) < 0
          // this.heap[currentIndex] < this.heap[rightChildIndex] &&
          // this.heap[largestIndex] < this.heap[rightChildIndex]
        ) {
          largestIndex = rightChildIndex;
        }

        if (largestIndex !== currentIndex) {
          [this.heap[largestIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[largestIndex]];
          currentIndex = largestIndex;
        } else {
          break;
        }
      }
      return max;
    }
    return this.getLength() === 0 ? null : this.heap.pop();
  };
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Top K Frequent Elements");
console.log("---------------------------------------");

const input = [
  5,
  1,
  -1,
  -8,
  -7,
  8,
  -5,
  0,
  1,
  10,
  8,
  0,
  -4,
  3,
  -1,
  -1,
  4,
  -5,
  4,
  -3,
  0,
  2,
  2,
  2,
  4,
  -2,
  -4,
  8,
  -7,
  -7,
  2,
  -8,
  0,
  -8,
  10,
  8,
  -8,
  -2,
  -9,
  4,
  -7,
  6,
  6,
  -1,
  4,
  2,
  8,
  -3,
  5,
  -9,
  -3,
  6,
  -8,
  -5,
  5,
  10,
  2,
  -5,
  -1,
  -5,
  1,
  -3,
  7,
  0,
  8,
  -2,
  -3,
  -1,
  -5,
  4,
  7,
  -9,
  0,
  2,
  10,
  4,
  4,
  -4,
  -1,
  -1,
  6,
  -8,
  -9,
  -1,
  9,
  -9,
  3,
  5,
  1,
  6,
  -1,
  -2,
  4,
  2,
  4,
  -6,
  4,
  4,
  5,
  -5
];
console.log("input: " + input);
const k = 7;
console.log("K: " + k);

console.log(topKFrequent(input, k));
console.log("---------------------------------------");
