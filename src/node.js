export default class Node {
  constructor(data) {
    this.data = data
    this.next = undefined
  }

  getData() {
    return this.data.data
  }

  setNext(inputNode) {
    this.next = inputNode
    return this
  }

  getNext(nextNode) {
    if (nextNode == undefined) {
      return null
    } else {
      return this.next
    }
  }
}
