class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode === null) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.nextNode = null;
      this.tail = previousNode;
    }

    this.length--;

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null;
  }

  toString() {
    let currentNode = this.head;
    let string = "";

    while (currentNode !== null) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }

    string += "null";

    return string;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log(list.size()); // 4
console.log(list.head.value); // 0
console.log(list.tail.value); // 3
console.log(list.at(2).value); // 2
console.log(list.pop()); // 3
console.log(list.contains(2)); // true
console.log(list.find(2)); // 1
console.log(list.toString()); // (0) -> (1) -> (2) -> null


