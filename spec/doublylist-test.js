import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { Node, DoublyList } from '../src/doubly-list'


chai.use(chaiChange)

describe('DoublyList', () => {
  ' use strict '

  it('exists', () => {
    expect(DoublyList).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node to the tail of the list', () => {
      const doublyList = new DoublyList()
      doublyList.insert('manhattan')

      expect(doublyList.tail.data).to.equal('manhattan')
      expect(doublyList.head.data).to.equal('manhattan')

      doublyList.insert('old fashioned')
      doublyList.insert('paloma')

      expect(doublyList.tail.data).to.equal('paloma')
      expect(doublyList.counter).to.equal(3)
    })
  })

  context('insertFirst()', () => {
    it('inserts a node at the head of the list', () => {
      const doublyList = new DoublyList()
      doublyList.insert('martini')

      expect(doublyList.head.data).to.equal('martini')

      doublyList.insert('mojito')
      doublyList.insertFirst('margarita')

      expect(doublyList.head.data).to.equal('margarita')
      expect(doublyList.counter).to.equal(3)
    })
  })

  // context('insertBefore()', () => {
  //   it('inserts a new node before another specified node in list', () => {
  //     const doublyList = new DoublyList()
  //     doublyList.insertBefore('irish coffee', 'bloody mary')
  //
  //
  //     expect(doublyList.head.data).to.equal('bloody mary')
  //     expect(doublyList.tail.data).to.equal('bloody mary')
  //     expect(doublyList.counter).to.equal(1)
  //
  //     doublyList.insert('mojito')
  //     doublyList.insert('margarita')
  //     doublyList.insertBefore('margarita', 'negroni')
  //
  //     expect(doublyList.counter).to.equal(4)
  //     expect(doublyList.previous.data).to.equal('negroni')
  //   })
  //   })


  // context.only('insertAfter()', () => {
  //   it('inserts a new node before another specified node in list', () => {
  //     const doublyList = new DoublyList()
  //     doublyList.insertAfter('irish coffee', 'bloody mary')
  //     console.log('HERE IS LIST AFTER MOJITO===>',doublyList.counter);
  //
  //     expect(doublyList.head).to.equal('bloody mary')
  //     expect(doublyList.tail).to.equal('bloody mary')
  //     expect(doublyList.counter).to.equal(1)
  //
  //     doublyList.insert('mojito')
  //     console.log('HERE IS LIST AFTER MOJITO===>',doublyList.counter);
  //     doublyList.insert('margarita')
  //     console.log('HERE IS LIST AFTER MOJITO===>',doublyList.counter);
  //     doublyList.insertAfter('margarita', 'negroni')
  //     console.log('HERE IS THE TAIL===>',doublyList.tail);
  //
  //     // console.log('HERE IS THE TAIL===>',doublyList.tail.previous.previous.data);
  //
  //     expect(doublyList.counter).to.equal(4)
  //     expect(doublyList.tail.data).to.equal('negroni')
  //   })
  // })
})
