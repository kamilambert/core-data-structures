class Node {
  constructor(data) {
  this.data = data
  this.next = null
  }
}

class LinkedList {
  constructor(data) {
    this._length = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains(fruit) {
    let currNode = this.head
    while (currNode.next !== null) {
      if (currNode.data == fruit) {
        return true
      }
      currNode = currNode.next
    }
     if (fruit == this.tail.data) {
      return true
    }
    return false
  }

  find(fruit) {
    let currNode = this.head
    while (currNode.next !== null) {
      if (currNode.data == fruit) {
        return currNode.data
      }
      currNode = currNode.next
    }
     if (fruit == this.tail.data) {
      return currentNode.data
    }
    return -1
  }

  insert(fruit) {
    let newNode = new Node(fruit), currentNode = this.head
    if ( !currentNode ) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  insertFirst(fruit) {
    let newNode = new Node(fruit)
    this.head = newNode
  }

  // insertBefore(fruit, newFruit) {
  //   let newNode = new Node(fruit), current = this.find(fruit)
  //   newNode.next = current.next
  // }

  insertAfter(fruit, newFruit) {
    let newNode = new Node(newFruit), currentNode = this.head
    while ( currentNode ) {
      if ( currentNode.next.data == fruit) {
        newNode.next = currentNode.next
        currentNode.next = newNode
        return
      }
    currentNode = currentNode.next
    }
  }
}

export { Node, LinkedList }
