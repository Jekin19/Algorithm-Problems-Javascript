/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let heap = new MaxHeap(function(a, b) {
    return a - b;
  }, k);
  nums.forEach(num => heap.insert(num));
  while (k > 1) {
    heap.extractMax();
    k--;
  }
  return heap.extractMax();
};

function MaxHeap(comparator, size = 1000) {
  this.comparator =
    comparator ||
    function(a, b) {
      return a - b;
    };

  this.size = size;
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

  // this.checkforSize = function(x) {
  //   if (this.heap.length === this.size) {
  //     if (this.heap.length > 2) {
  //       if (this.comparator(this.heap[this.heap.length - 2], this.heap[this.heap.length - 1]) < 0) {
  //         [this.heap[this.heap.length - 2], this.heap[this.heap.length - 1]] = [
  //           this.heap[this.heap.length - 1],
  //           this.heap[this.heap.length - 2]
  //         ];
  //       }
  //     }
  //     if (this.comparator(this.heap[this.heap.length - 1], x) < 0) {
  //       this.heap.pop();
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // Add the element to the bottom level of the heap at the most left.
  // Compare the added element with its parent; if they are in the correct order, stop.
  // If not, swap the element with its parent and return to the previous step.
  this.insert = function(x) {
    // if (!this.checkforSize(x)) {
    //   return;
    // }
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
console.log("Group Anagram");
console.log("---------------------------------------");

const input = [3, 2, 1, 5, 6, 4];
console.log("input: " + input);
const k = 3;
console.log("k: " + k);
console.log(findKthLargest(input, k));
console.log("---------------------------------------");
