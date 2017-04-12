import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { Node, LinkedList } from '../src/linked-list'


chai.use(chaiChange)

describe('LinkedList', () => {
  ' use strict '

  const linkedList = new LinkedList()
  linkedList.insert('banana')
  linkedList.insert('apple')
  linkedList.insert('pear')
  linkedList.insert('pineapple')

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      expect( linkedList.getHeadNode().data ).to.equal('banana')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      expect( linkedList.getTailNode().data ).to.equal('pineapple')
    })
  })

  context('contains()', () => {
    it('determines whether or not the list contains provided data', () => {
      expect( linkedList.contains('apple') ).to.equal(true)
    })

    it('determines whether or not the list contains provided data', () => {
      expect( linkedList.contains('fig') ).to.equal(false)
    })
  })

  context('find()', () => {
    it('returns the first node containing the provided data', () => {
      expect( linkedList.find('banana') ).to.equal('banana')
    })

    it('returns -1 if not found ', () => {
      expect( linkedList.find('raisin') ).to.equal(-1)
    })
  })

  context('insert()', () => {
    it('inserts a node to the tail of the list', () => {
      linkedList.insert('mango')
      expect( linkedList.tail.data ).to.equal('mango')
    })
  })

  context('insertFirst()', () => {
    it('inserts a node to the head of the list', () => {
      linkedList.insertFirst('tangerine')
      expect( linkedList.head.data ).to.equal('tangerine')
    })
  })

  context('insertBefore()', () => {
    it('inserts a node "pomegranate" before the first node containing "banana"', () => {
      linkedList.insertBefore('banana', 'pomegranate')
      expect( linkedList.head.next.data ).to.equal('pomegranate')
    })
  })

  context('insertAfter()', () => {
    it('inserts a node "coconut" after the first node containing "banana"', () => {
      linkedList.insertAfter('banana', 'coconut')
      expect( linkedList.head.next.next.next.data ).to.equal('coconut')
    })
  })

  context('remove()', () => {
    it('removes the tail node from the list', () => {
      linkedList.remove()
      expect(linkedList.counter).to.equal(5)
    })
  })

  context('removeFirst()', () => {
    it('removes the head node from the list', () => {
      linkedList.removeFirst()
      expect(linkedList.head.data).to.equal('pomegranate')
    })
  })

  context('isEmpty()', () => {
    it('determines if the list is empty or not', () => {
      expect( linkedList.isEmpty() ).to.equal(false)
    })
  })

  context('size()', () => {
    it('returns the size of the list', () => {
      expect( linkedList.size() ).to.equal(4)
    })
  })

  context('clear', () => {
    it('clears the list of all nodes/data', () => {
      linkedList.clear()
      expect( linkedList.counter ).to.equal(0)
    })
  })
})
