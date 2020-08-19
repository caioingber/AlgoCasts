# Runtime Complexity

Describes performance of an algorithm - i.e. how much more processing power/time is required in the event that the inputs increase

| Runtime Name | Big O Notation | Description                                                                 | Examples                                          |
| ------------ | -------------- | --------------------------------------------------------------------------- | ------------------------------------------------- |
| Constant     | O(1)           | No matter how many inputs, runtime will be the same. The "Holy Grail" of RC |                                                   |
| Logarithmic  | O(log(n))      | Doubling inputs does not double amount of work                              | Searching operations                              |
| Linear       | O(n)           | Runtime is directly correlated to number of inputs.                         | Iterating through collection of data (e.g. loops) |
| Quasilinear  | O(n \* log(n)) | Doubling still does not double amount of work                               | Sorting operations                                |
| Quadratic    | O(n^2)         | Every element in a collection has to be compared every other element        | Nested loop over a single collection              |
| Exponential  | O(2^n)         | Adding a single additional element doubles the amount of work.              | Nested loop over more than one collection         |

# Memoization

Storing the arguments of each functional call in a recursive solution along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.

# Data Structures

Ways of organizing information with optimal 'runtime complexity' for adding or removing records.

Javascript natively implements several data structures. You will still be asked about 'inferior' data structures. e.g. JS arrays have implementations of several data structures. When asked to implement from scratch, we need to limit the associated methods.

## Queues

Thought of as a container, where records enter on one end and exit on the other. Like 'waiting in line' with no cutting. An element exits in the order that it enters. The order of the queue is fixed.

Adding a record --> 'Enqueing or adding'
Removing a record --> 'Dequeing or removing'

First In First Out principle (FIFO) - Limit the following JS Array prototype methods.

```Javascript
Array.unshift() //First In
Array.pop() // First Out
```

## Stacks

Similar to queue, ordered list of records but FILO (First In, Last Out).

Instead of `.unshift()` we use `.push()`

## Recursion

A solution where a function calls itself. Think about the base case (i.e. a bare minimum pieces of information to represent the problem), and give reasonable default values for the base case. Check the base case, if there is no work left to do, return a result. Make sure that arguments are changing in the recursive call to avoid an infinite function call.

## Linked List

Ordered collection of data, consisting of various 'nodes'. Each node contains some data as well as a reference to the next node. Any type of valid JS value (e.g. array, object, integer, etc).

```Javascript
const nodeOne = {
    data: 123
}

const nodeTwo = {
    data: 456
}

nodeOne.next = nodeTwo
```

The 'head' node is the initial node in the list, while the 'tail' is the last node in the list. In the example above `nodeTwo` serves as the 'tail' node.
