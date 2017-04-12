class Node {
  constructor(data) {
  this.data = data
  this.next = null
  }
}

class LinkedList {
  constructor(data) {
    this.counter = 0
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
    this.counter++
  }

  insertFirst(fruit) {
    let newNode = new Node(fruit)
    let currentNode = this.head

    if ( !currentNode ) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    currentNode = currentNode.next
    this.counter++
  }

  insertBefore(fruit, newFruit) {
    let newNode = new Node(newFruit)
    let currentNode = this.head

    if(this.counter == 1) {
      newNode.next = this.head
      this.head = newNode
    }
    while ( currentNode ) {
      if ( currentNode.next.data == fruit) {
        newNode.next = currentNode.next
        currentNode.next = newNode
        return
    } else {
        currentNode = currentNode.next
    }
      if (currentNode == this.tail) {
        return `${fruit} does not exist`
      }
    }
    this.counter++
  }

  insertAfter(fruit, newFruit) {
    let newNode = new Node(newFruit)
    let currentNode = this.head

    if(this.counter == 1) {
      currentNode.next = newNode
    }
    while ( currentNode ) {
      if ( currentNode.data == fruit) {
        newNode.next = currentNode.next
        currentNode.next = newNode
        return
    } else {
        currentNode = currentNode.next
    }
      if (currentNode == this.tail) {
        return `${fruit} does not exist`
      }
    }
    this.counter++
  }

  remove() {
    let currentNode = this.head
    while( currentNode.next ) {
      if(currentNode.next === this.tail) {
        currentNode = this.tail
        currentNode.next = null
      }
      this.counter--
      return
    }
      currentNode.next = currentNode
  }

  removeFirst() {
    let currentNode = this.head
    this.head = currentNode.next
      this.counter--
      return
  }

  isEmpty() {
    if (this.head == null) {
      return true
    }
    return false
    // could also write: return this.head === null
  }

  size() {
    return this.counter
  }

  clear() {
    this.head = this.tail = null
    this.counter = 0
  }
}

export { Node, LinkedList }
