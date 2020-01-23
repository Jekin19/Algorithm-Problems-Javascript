// Queue can enqueu & dequeu.

class stack_using_queue {
  constructor() {
    this.queue1 = [];
  }

  push(data) {
    return this.queue1.unshift(data);
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      throw "Empty Stack";
    }
    const queue2 = [];
    let i = 0;
    while (i < this.queue1.length - 1) {
      // pop acts like deque i.e. giving FIFO order.
      queue2.unshift(this.queue1.pop());
      i++;
    }
    const lastElement = this.queue1[0];
    this.queue1 = queue2;
    return lastElement;
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Stack using Queues");
console.log("---------------------------------------");
let sq = new stack_using_queue();
sq.push(1);
sq.push(2);
console.log(sq.pop());
console.log(sq.pop());
sq.push(1);
sq.push(2);
console.log("++++++ Test Done Successfully ++++++");
