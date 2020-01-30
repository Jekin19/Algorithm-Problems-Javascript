/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let timer = 0;
  if (!tasks || tasks.length === 0 || n < 0) {
    return timer;
  }

  let map = new Map();
  tasks.forEach(task => {
    if (map.has(task)) {
      map.set(task, map.get(task) + 1);
    } else {
      map.set(task, 1);
    }
  });

  let heap = new MaxHeap((a, b) => a[1] - b[1]);
  for (let keyValue of map) {
    heap.insert(keyValue);
  }

  while (heap.getLength() > 0) {
    let tempHeapElements = [];
    let i = n + 1;
    while (i >= 1) {
      if (heap.getLength() > 0) {
        tempHeapElements.push(heap.extractMax());
        timer++;
      } else {
        break;
      }
      i--;
    }
    if (tempHeapElements.length !== 0) {
      tempHeapElements.forEach(element => {
        if (element[1] > 1) {
          element[1] = element[1] - 1;
          heap.insert(element);
        }
      });
    }

    if (heap.getLength() !== 0) {
      timer += i;
    }
  }

  return timer;
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
console.log("Task Scheduler");
console.log("---------------------------------------");

const input = ["A", "A", "A", "B", "B", "B"];
console.log("input: " + input);
const n = 2;
console.log("n: " + n);
console.log(leastInterval(input, n));
console.log("---------------------------------------");
