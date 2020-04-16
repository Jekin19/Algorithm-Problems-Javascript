// https://en.wikipedia.org/wiki/Binary_heap

function MaxHeap(comparator) {
  this.comparator =
    comparator ||
    function (a, b) {
      return a - b;
    };
  this.heap = [];

  this.getLength = function () {
    return this.heap.length;
  };

  // Add the element to the bottom level of the heap at the most left.
  // Compare the added element with its parent; if they are in the correct order, stop.
  // If not, swap the element with its parent and return to the previous step.
  this.insert = function (x) {
    this.heap.push(x);
    let insertedIndex = this.heap.length - 1;
    while (insertedIndex > 0) {
      let parentIndex = Math.floor((insertedIndex - 1) / 2);
      if (this.comparator(this.heap[insertedIndex], this.heap[parentIndex]) > 0) {
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
  this.extractMax = function () {
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
        ) {
          largestIndex = leftChildIndex;
        }
        if (
          rightChildIndex < this.heap.length &&
          this.comparator(this.heap[currentIndex], this.heap[rightChildIndex]) < 0 &&
          this.comparator(this.heap[largestIndex], this.heap[rightChildIndex]) < 0
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

let heap = new MaxHeap((a, b) => b - a);
heap.insert(10);
heap.insert(5);
heap.insert(8);
heap.insert(12);
heap.insert(3);
heap.insert(5);
heap.insert(14);
heap.insert(8);
while (heap.getLength() > 0) {
  console.log(heap.extractMax());
}
