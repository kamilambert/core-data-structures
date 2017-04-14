import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { Node, Stack } from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  const myStack = new Stack()
  myStack.push('dog')
  myStack.push('cat')
  myStack.push('hampster')

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.top, { by: 1 })
    })
  })

  context('pop()', () => {
    it('returns null if no elements in stack', () => {
      const myStack = new Stack()
      expect( myStack.pop() ).to.equal(null)
    })

    it('returns top element in stack', () => {
      const myStack = new Stack()
      myStack.push('puppy')
      expect( myStack.pop() ).to.equal('puppy')
    })
  })

  context('isEmpty()', () => {
    it('returns true if stack is empty, returns false if not', () => {
      const myStack = new Stack()
      expect( myStack.isEmpty() ).to.equal(true)
    })
  })

  context('length()', () => {
    it('returns length of stack', () => {
      const myStack = new Stack()
      myStack.push('kitten')
      myStack.push('hampster')
      expect( myStack.length() ).to.equal(2)
    })
  })
})
