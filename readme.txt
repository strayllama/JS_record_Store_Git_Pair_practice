
# JS Record Store

Your task is to use JS TDD to model a Record Store.

Use constructors and prototypes throughout, and when appropriate, use enumeration methods rather than `for` loops.

## Using git

We won't be using pair-programming this time (although you should still help each other out!) - we'll be practicing using branches and merges to work on different parts of the project simultaneously.

You can subdivide the task as you see fit, but it is usually easiest for one person to do the initial setup of the project. Then, they should push up to Github and [add the other person as a collaborator on the project](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/).

Once this is done, the second person can clone the project and start to work on it.

## Part A

- Create a Record object that has an Artist, Title, Genre, and Price
- Create a Record Store that has a Name, City and an Inventory.
- Give the Record Store a Balance.
- Add some Records to the Store's Inventory.

## Part B

- Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.
- Create a method that reports the value of all Records in the store's inventory.
- Create a method that allows the store to view all Records of a given Genre.

## Part C

- Create a RecordCollector (or Customer) constructor who can buy and sell records.
- The RecordCollector should have cash that increase and decreases with buying and selling.
- The RecordCollector shouldn't be able to buy a Record if he can't afford it.
- The RecordCollector should be able to view the total value of their collection
- The RecordCollector should be able to view the total value of all records of a given Genre
- The RecordCollector should be able to view their most valuable record.
- The RecordCollector should be able to sort their records by value. (ascending or descending)
- The RecordCollector should be able to compare the value of their collection with another RecordCollector
