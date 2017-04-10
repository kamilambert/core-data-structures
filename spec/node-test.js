import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'

  const nodeA = new Node({data: "apple"})
  const nodeB = new Node({data: "banana"})
  const nodeC = new Node({data: "orange"})

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('getData()', () => {

    it('returns the data ("apple") of the node', () => {
      expect( nodeA.getData() ).to.equal('apple')
    })
  })

  context('setNext()', () => {
    it('changes the reference to the next node', () => {
      expect(() => { nodeA.setNext(nodeB) }).to.alter(() => nodeA.next)
    })

    it.only('returns the original node', () => {
      expect( nodeA.setNext() ).to.equal('nodeA')
    })
  })
})
