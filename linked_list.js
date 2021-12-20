class LinkedList {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const cache = new Map();

const head = new LinkedList(0);
cache.set(String(0), head);

let tail = head;

let current = head;

for (let i = 1; i <= 10; i++) {
  current.next = new LinkedList(i, current);
  current = current.next;
  tail = current;

  cache.set(String(i), current);
}

console.log(head);
console.log(cache);

current = head;
while (current.value !== 3) current = current.next;

cache.delete(String(current.value));
const prevNode = current.prev;
const nextNode = current.next;
prevNode.next = nextNode;
nextNode.prev = prevNode;

console.log(cache);

// let newNode = new LinkedList('new node');
// newNode.prev = current;
// newNode.next = current.next;
// current.next = newNode;

// console.log(head);