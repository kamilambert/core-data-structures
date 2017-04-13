class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = 0
    this.dataStore = []
  }

  push(newItem) {
    this.dataStore[this.top] = newItem
    this.top++
  }

  pop() {
    if(this.top === 0) {
      return null
    } else {
      this.top--
      return this.dataStore[this.top]
    }
  }

  isEmpty() {
    if (this.top === 0) {
      return true
    } else {
      return false
    }
  }

  length() {
    return this.top
  }
}

export { Node, Stack }
