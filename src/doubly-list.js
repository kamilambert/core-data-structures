class Node {
  constructor(data) {
  this.data = data
  this.previous = null
  this.next = null
  }
}

class DoublyList {
  constructor(data) {
    this.counter = 0
    this.head = null
    this.tail = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (this.counter) {
      this.tail = newNode
      newNode.previous = this.tail
      this.tail = newNode
      newNode.next = null
      this.counter++
      return newNode
    }
      this.head = this.tail = newNode
      newNode.previous = newNode.next = null
      this.counter++
      return newNode
  }

  insertFirst(thing) {
    let newNode = new Node(thing)
    if (this.counter) {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
      newNode.previous = null
      this.counter++
      return newNode
    }
      this.head = this.tail = newNode
      newNode.previous = newNode.next = null
      this.counter++
      return newNode
  }

  insertBefore(thing, newThing) {
    let currentNode = this.head,
        newNode = new Node(newThing)
    if (!this.counter) {
      this.head = this.tail = newNode
      newNode.previous = newNode.next = null
      this.counter++
      return newNode
    } else if (this.counter === 1) {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
      newNode.previous = null
      this.counter++
      return newNode
    }
    while (currentNode) {
      if (currentNode.data === thing) {
        // currentNode.next.previous = newNode
        newNode.next = currentNode.previous
        currentNode.previous = newNode.next
        newNode.previous = newNode
        this.counter++

        return newNode
      }
        currentNode = currentNode.next
    }
    this.counter++
  }

  insertAfter(thing, newThing) {
    let currentNode = this.head,
        newNode = new Node(newThing)
    if (!this.counter) {
      this.head = this.tail = newThing
    } else if (this.counter === 1) {
      newNode.previous = this.tail
      this.head = newNode
    }
    while (currentNode) {
      if (currentNode.data === thing) {
        newNode.previous = currentNode
        newNode.next = currentNode.next
        currentNode.next = newNode
      }
        currentNode = currentNode.next
    }
    this.counter++
  }
}

export { Node, DoublyList }
