class queue_using_stack {
  constructor() {
    this.stack1 = [];
  }

  enqueue(data) {
    return this.stack1.push(data);
  }
  empty() {
    return this.stack1.length === 0;
  }
  dequeue() {
    if (this.empty()) {
      throw "Empty Queue";
    }
    let i = this.stack1.length - 1;
    const stack2 = [];
    while (i > 1) {
      stack2.push(this.stack1.pop());
      i--;
    }
    const lastElement = this.stack1.pop();
    while (stack2.length > 0) {
      this.stack1.push(stack2.pop());
    }
    return lastElement;
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Queue using Stacks");
console.log("---------------------------------------");
let qs = new queue_using_stack();
qs.enqueue(1);
qs.enqueue(2);
console.log(qs.dequeue());
qs.enqueue(3);
console.log(qs.dequeue());
qs.enqueue(4);
qs.enqueue(5);
console.log(qs.dequeue());
console.log(qs.dequeue());
console.log(qs.dequeue());
qs.enqueue(1);
qs.enqueue(2);
console.log("++++++ Test Done Successfully ++++++");
