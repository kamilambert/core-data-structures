export default class Queue {
  constructor() {
    this.oldestIndex = 1
    this.newestIndex = 1
    this.dataStore = {}
  }

  enqueue(entry) {
    this.dataStore[this.newestIndex] = entry
    this.newestIndex++
    return this.newestIndex
  }

  dequeue() {
    if (this.oldestIndex !== this.newestIndex) {
      let deletedData = this.dataStore[this.oldestIndex]
      delete this.dataStore[this.oldestIndex]
      this.oldestIndex++
      return deletedData
    } return null
  }

  front() {
    if (this.oldestIndex !== this.newestIndex) {
      return this.dataStore[this.oldestIndex]
    } return null
  }

  back() {
    if (this.oldestIndex !== this.newestIndex) {
      return this.dataStore[this.newestIndex - 1]
    } return null
  }

  isEmpty() {
    return this.newestIndex === this.oldestIndex
  }

  length() {
    return this.newestIndex - this.oldestIndex
  }
}
