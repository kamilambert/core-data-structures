import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { PriorityNode, PriorityQueue } from '../src/pqueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    const pqueue = new PriorityQueue()
    it('adds an element to the back of the queue and increments counter', () => {
      expect( () => pqueue.enqueue('okcupid') ).to.alter( () => pqueue.counter, { by: 1 })
      expect(pqueue.enqueue('itsjustlunch', 50).data).to.equal('itsjustlunch')
      expect(pqueue.enqueue('itsjustlunch', 50).priority).to.equal(50)
    })
  })

  context('front()', () => {
    it('returns top element in the queue or null if queue is empty', () => {
      const pqueue = new PriorityQueue()
      expect(pqueue.front()).to.equal(null)

      pqueue.enqueue('daddyhunt', 100)
      pqueue.enqueue('her', 300)
      pqueue.enqueue('bumble', 200)

      expect(pqueue.front().data).to.equal('her')
      expect(pqueue.front().priority).to.equal(300)
    })
  })

  context('back()', () => {
    it('returns back element in the queue or null if queue is empty', () => {
      const pqueue = new PriorityQueue()
      expect(pqueue.back()).to.equal(null)

      pqueue.enqueue('daddyhunt', 100)
      pqueue.enqueue('her', 300)
      pqueue.enqueue('bumble', 200)

      expect(pqueue.back().data).to.equal('daddyhunt')
      expect(pqueue.back().priority).to.equal(100)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const myQueue = new PriorityQueue()
      expect(myQueue.dequeue() ).to.equal(null)

      myQueue.enqueue('grindr', 50)
      myQueue.enqueue('daddyhunt', 200)
      myQueue.enqueue('manhunt', 200)
      myQueue.enqueue('her', 100)
      myQueue.enqueue('bumble', 150)

      expect(myQueue.dequeue().data ).to.equal('daddyhunt')
      expect(myQueue.dequeue().priority ).to.equal(200)
    })
  })

  context('isEmpty()', () => {
    const pqueue = new PriorityQueue()
    it('returns true if queue is empty, else returns false', () => {
      expect(pqueue.isEmpty()).to.equal(true)
    })
  })

  context('mylength()', () => {
    const pqueue = new PriorityQueue()
    it('returns the number of elements in queue', () => {
      expect(pqueue.mylength()).to.equal(0)
    })
  })
})
