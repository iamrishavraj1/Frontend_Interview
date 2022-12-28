var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

MyQueue.prototype.pop = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

MyQueue.prototype.peek = function () {
  if (!this.popStack.length) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack[this.popStack.length - 1];
};
MyQueue.prototype.empty = function () {
  return !this.popStack.length && !this.pushStack.length;
};

let obj = new MyQueue();
obj.push(22);
obj.push(22);
obj.push(2222);
console.log(obj);
obj.pop(22);
obj.push(222222212);
console.log(obj);
console.log(obj.peek());
