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
