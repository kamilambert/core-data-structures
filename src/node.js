export default class Node {
  constructor(data) {
    this.data = data
    this.next = undefined
  }

  getData() {
    return this.data.data
  }

  setNext(inputNode) {
    this.data.next = inputNode
    return this
  }
}
