class LinkedList {
  constructor(listHead = null) {
    if (listHead) {
      const nodeValue = new Node(listHead);
      this.listHead = nodeValue;
    }
  }
  append(value) {
    const nodeValue = new Node(value);
    if (this.listHead == null) {
      this.listHead = nodeValue;
      return;
    }
    let current = this.listHead;
    while (current.next != null) current = current.next;
    current.next = nodeValue;
  }
  prepend(value) {
    const nodeValue = new Node(value, this.listHead);
    this.listHead = nodeValue;
  }
  size() {
    let pointer = this.listHead;
    let count = 0;
    while (pointer != null) {
      pointer = pointer.next;
      count++;
    }
    return count;
  }
  head() {
    return this.listHead;
  }
  tail() {
    let pointer = this.listHead;
    while (pointer.next != null) pointer = pointer.next;
    return pointer;
  }
  at(index) {
    let pointer = this.listHead;
    let count = 0;
    while (count < index) {
      pointer = pointer.next;
      count++;
      if (pointer == null) return null;
    }
    return pointer;
  }
  pop() {
    if (!this.listHead) return;
    if (!this.listHead.next) {
      this.listHead = null;
      return;
    }
    let pointer = this.listHead;
    while (pointer.next.next != null) pointer = pointer.next;
    pointer.next = null;
  }
  contains(value) {
    let pointer = this.listHead;
    while (pointer != null) {
      if (pointer.value === value) return true;
      pointer = pointer.next;
    }
    return false;
  }
  find(value) {
    let pointer = this.listHead;
    let count = 0;
    while (pointer != null) {
      if (pointer.value === value) return count;
      pointer = pointer.next;
      count++;
    }
    return null;
  }
  toString() {
    let pointer = this.listHead;
    let print = ``;
    while (pointer != null) {
      print += `( ${pointer.value} ) -> `;
      pointer = pointer.next;
    }
    print += `null`;
    return print;
  }
  insertAt(value, index) {
    if (index == 0) {
      this.listHead = new Node(value, this.listHead);
      return;
    }
    let prevNode = this.at(index - 1);
    if (!prevNode) throw new Error("Index is not it the list");
    prevNode.next = new Node(value, prevNode.next);
  }
  removeAt(index) {
    if (index == 0) {
      this.listHead = this.listHead.next;
      return;
    }
    if (index == this.size()) {
      this.pop();
      return;
    }
    let prevNode = this.at(index - 1);
    if (!prevNode) throw new Error("Index is not it the list");
    prevNode.next = prevNode.next.next;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let list = new LinkedList();
list.append(2);
list.append(1);
list.append("hello");
list.removeAt(2);
console.log(list.toString());
