// https://www.geeksforgeeks.org/design-a-data-structure-for-lru-cache/
// https://leetcode.com/problems/lru-cache

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.length = 0;
  this.capacity = capacity;
  this.head = { val: 0 };
  this.tail = { val: 0 };
  this.head.next = this.tail;
  this.tail.pre = this.head;
  this.head.pre = null;
  this.tail.next = null;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.addToHead = function(node) {
  node.next = this.head.next;
  node.next.pre = node;
  node.pre = this.head;
  this.head.next = node;
};

/**
 * @param {number} key
 * @return {boolean}
 */
LRUCache.prototype.deleteNode = function(node) {
  node.pre.next = node.next;
  node.next.pre = node.pre;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    this.deleteNode(node);
    this.addToHead(node);
    return this.map.get(key).value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = { value, next: null, pre: null, key };
  if (this.map.has(key)) {
    node = this.map.get(key);
    node.value = value;
    this.deleteNode(node);
    this.addToHead(node);
  } else {
    this.map.set(key, node);
    if (this.length < this.capacity) {
      this.length++;
      this.addToHead(node);
    } else {
      this.map.delete(this.tail.pre.key);
      this.deleteNode(this.tail.pre);
      this.addToHead(node);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("LRU cache");
console.log("---------------------------------------");

const lru = new LRUCache(1);
lru.put(2, 1);

console.log(JSON.stringify(lru.get(2)));
lru.put(3, 2);
console.log(JSON.stringify(lru.get(2)));
console.log(JSON.stringify(lru.get(3)));
