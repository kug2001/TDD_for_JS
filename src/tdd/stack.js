class Stack {
  constructor() {
    this.memory = [];
  }
  size() {
    return this.memory.length;
  }
  push(data) {
    this.memory.push(data);
  }
  pop() {
    if (this.memory.length === 0) {
      throw new Error('error');
    }
    return this.memory.pop();
  }
}

module.exports = Stack;