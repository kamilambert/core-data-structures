import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe.only('Queue', () => {
  'use strict'

  const queue = new Queue()

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('increments newestIndex up by 1', () => {
      expect( () => queue.enqueue('mustang')).to.alter( () => queue.newestIndex, { by: 1 })
    })
  })

  context('dequeue()', () => {
    it('returns and removes front element in queue', () => {
      const queue = new Queue()
      queue.enqueue('tesla')
      queue.enqueue('mercedes')
      expect( queue.dequeue() ).to.equal('tesla')
    })

    it('returns null if queue is empty', () => {
      const queue = new Queue()
      expect( queue.dequeue() ).to.equal(null)
    })
  })

  context('front()', () => {
    it('returns the front element in queue', () => {
      const queue = new Queue()
      queue.enqueue('tesla')
      queue.enqueue('mercedes')
      expect( queue.front() ).to.equal('tesla')
    })

    it('returns null if queue is empty', () => {
      const queue = new Queue()
      expect( queue.front() ).to.equal(null)
    })
  })

  context('back()', () => {
    it('returns the back element in queue', () => {
      const queue = new Queue()
      queue.enqueue('tesla')
      queue.enqueue('mercedes')
      expect( queue.back() ).to.equal('mercedes')
    })
  })

  context('isEmpty()', () => {
    it('returns true if queue is empty, false if not', () => {
      const queue = new Queue()
      expect( queue.isEmpty() ).to.equal(true)
    })
  })

  context('length()', () => {
    it('returns length of queue', () => {
      const queue = new Queue()
      queue.enqueue('tesla')
      queue.enqueue('mercedes')
      expect( queue.length() ).to.equal(2)
    })

    it('returns lenth of zero when queue is empty', () => {
      const queue = new Queue()
      expect( queue.length() ).to.equal(0)
    })
  })
})
