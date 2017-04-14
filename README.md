# Core Data Structures
#TEAM: Kamila Lambert

Tests and implementations for common data structures. See the full list in the [data-structures.md](data-structures.md) file.

Base repository for the [Core Data Structures](http://jsdev.learnersguild.org/goals/128) goal.

## Installation and Setup 

For this project, we created both tests and implementations of core data structures. Begin with installing your dependencies from the package.json file.

Check for mocha and chai in your .json file. If not already provided, use the link below to install.

[jsdoc]: http://usejsdoc.org/
[npm]: https://www.npmjs.com/
[npm-documentation]: https://www.npmjs.com/package/documentation
[babel]: https://babeljs.io/blog/2015/10/31/setting-up-babel-6
[mocha]: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

Use `npm install` in order to install all dependencies.

## Usage and Examples

This is the dequeue function in my queue.js file, it removes and element from the front of a queue, or returns null if there are no items.

```
dequeue() {
  if (this.oldestIndex !== this.newestIndex) {
    let deletedData = this.dataStore[this.oldestIndex]
    delete this.dataStore[this.oldestIndex]
    this.oldestIndex++
    return deletedData
  } return null
}
```

# Core Data Structures

[Basic](#basic-data-structures) | [Advanced](#advanced-data-structures)

## Basic Data Structures

### Node

A very basic data structure that can contain some value and a reference to another node. Used as a building block for many other data structures.

```javascript
const nodeA = new Node({data: "apple"})
const nodeB = new Node({data: "banana"})

[x]nodeA.getData()       // returns the data ("apple") of the node
[x]nodeA.setNext(nodeB)  // changes the reference to the next node and returns the original node
[x]nodeA.getNext()       // returns the next node, or null if no next node
```

### Linked List ( using Nodes )

A list of [nodes](#node) that link to each other, like a daisy-chain.

From [Wikipedia](https://en.wikipedia.org/wiki/Linked_list) [edited]:

> A linear collection of data elements, called nodes, each pointing to the next node by means of a pointer. It is a data structure consisting of a group of nodes which together represent a sequence.

Specifically, the following is a _singly-linked_ list (as opposed to a [doubly-linked list](#doubly-linked-list-using-double-nodes)).

```javascript
const linkedList = new LinkedList()
[x]linkedList.getHeadNode()           // Returns the first node in the list
[x]linkedList.getTailNode()           // Returns the last node in the list
[x]linkedList.contains("bananas")     // Determines whether or not the list contains the provided data
[x]linkedList.find("bananas")         // Returns the first node containing the provided data, or -1 if not found
[x]linkedList.insert("bananas")       // Inserts a node (with the provided data) to the tail of the list
[x]linkedList.insertFirst("bananas")  // Inserts a node (with the provided data) to the head of the list
[x]linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
[x]linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
[x]linkedList.remove()                // Removes the tail node from the list
[x]linkedList.removeFirst()           // Removes the head node from the list
[x]linkedList.isEmpty()               // Determines if the list is empty or not
[x]linkedList.size()                  // Returns the size of the list (number of nodes)
[x]linkedList.clear()                 // Clears the list of all nodes/data
```

### Stack ( using Nodes )

The classic LIFO (Last-In-First-Out) one-dimensional list.

From [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) [edited]:

> An abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a stack gives rise to its alternative name, LIFO (for last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

```javascript
const stack = new Stack()
[x]stack.push("foo") // push an element (the string "foo") to the top of the stack.
[x]stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
[x]stack.peek()      // returns the top element in the stack or null if the stack is empty.
[x]stack.isEmpty()   // returns true if the stack is empty or false if not.
[x]stack.length()    // returns the number of elements in the stack.
```

To implement a _standard_ stack, use the [Node](#node) data structure in your implementation.

### Queue ( using Nodes )

The classic FIFO (First-In-First-Out) one-dimensional list.

From [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) [edited]:

> A particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue.

```javascript
const queue = new Queue()
[x]queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.
[x]queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
[x]queue.front()        // returns the front element in queue or null if the queue is empty.
[x]queue.back()         // returns the back element in the queue or null if the queue is empty.
[x]queue.isEmpty()      // returns true if the queue is empty or false if not.
[x]queue.length()       // returns the number of elements in the queue
```

To implement a _standard_ queue, use the [Node](#node) data structure in your implementation.

### Priority Queue ( using Priority Nodes )

Like a queue, but with _priorities_.

From [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue) [edited]:

> An abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. An element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.

```javascript
const pQueue = new PriorityQueue()
[x]pQueue.enqueue("pizza", 100) // adds an element with priority (number) to the back of the queue.
[x]pQueue.front()               // returns the front element (highest priority) in the queue or null if the queue is empty.
[x]pQueue.back()                // returns the back element (lowest priority) in the queue or null if the queue is empty.
[x]pQueue.dequeue()             // returns and removes the front element (highest priority) in the queue or null if the queue is empty.
[x]pQueue.isEmpty()             // returns true if the queue is empty or false if not.
[x]pQueue.length()              // returns the number of elements in the queue.
```

#### Priority Node

To implement a _standard_ priority queue, use a **priority node** data structure in your implementation. You don't need to write tests for this object or expose its interface in the public API. Use this interface as a reference:

```javascript
const pizzaNode = new PriorityNode({data: "pizza", priority: 100})
const saladNode = new PriorityNode({data: "salad", priority: 50})

[x]pizzaNode.getData()           // returns the node's data
[x]pizzaNode.getPriority()       // returns the node's priority
[x]pizzaNode.setPriority(200)    // changes the node's priority and returns the node
[x]pizzaNode.setNext(saladNode)  // changes the reference to the next node and returns the original node
[x]pizzaNode.getNext()           // returns the next node or null if none
```

### Doubly-Linked List ( using Double Nodes )

The interface for the Doubly-Linked List is the same as the Linked List above, _except_ that it uses a double-link node (see below).

From [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list) [edited]:

> A linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called _links_, that are references to the previous and to the next node in the sequence of nodes.

#### Double Node

To implement a _standard_ doubly-linked list, use a **double node** data structure in your implementation.

This is the same as the [Node](#node) data structure, except that it also has the methods `.getPrevious()` and `.setPrevious(<DoubleNode>)`. These methods get and set the previous `DoubleNode` in the list.

### Set

Collection of things, without repetition.

From [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) [edited]:

> An abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite set. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set.

```javascript
const set      = new Set(['A', 'B', 'C'])
const otherSet = new Set(['B', 'C', 'E'])
set.add('D')             // adds an element to the set.
set.isEmpty()            // returns true if the set is empty or false if not.
set.contains('B')        // returns true the set contains the element or false if not.
set.remove('C')          // removes an element (if it exists) from the set.
set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
set.size()               // returns the number of elements in the set.
set.union(otherSet)      // unions the set with another set and returns the resulting set.
set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
set.clone()              // returns a cloned set.
```

_Note: if you haven't worked with sets before, you may want to read about [sets](https://www.mathsisfun.com/sets/sets-introduction.html) and [subsets](https://www.mathsisfun.com/activity/subsets.html)._
