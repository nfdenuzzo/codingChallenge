# Imprimatur JavaScript Developer Test

## How to complete the test

Clone the repository to your computer and install the dependencies:

```bash
npm i
```

When you have completed the test, either create your own repository to store your project (Github/BitBucket/Gitlab are all fine), then send us a link to the repository or just ZIP the files and send them stright to us (phil.lane@imprimatur.co.uk).

## The test

In the file src/search.js there is an empty function. Your task is to create a function that passes all tests (src/tests/search.test.js) that are written using jest.
The search function takes two parameters: 1) data - an object to search; in this case the contents of src/data.js and 2) query an object that represents the search to perform.

Please feel free to extend the function and tests, if you would like to demonstrate further knowledge.

## Requirements

1.  There is no time limit for the task however we would like you to let us know how long it has taken you complete, including research time if necessary.
2.  Don't worry if you are unable to complete the test (nobody knows everything), we can always discuss your solution as it stands.
3.  Please feel free to reasearch the problem, just remember to include this time when you let us know how long it took you to complete the test.
4.  Please use all the tools available to you such as IDEs and debuggers as required.
5.  Please try to write clean code, that does not rely on any third party libraries or frameworks, just javascript (ES6+ is fine!).

The query objects are written in Mongo query language. For instance, given this example data object:

```json
[
  {
    "id": 1,
    "objectKey": {
      "settings": true
    }
  },
  {
    "id": 2,
    "objectKey": {
      "settings": false
    }
  }
]
```

You should be able to find any object where "objectKey" contains "settings": true using a query object like this:

```json
{
  "objectKey.settings": true
}
```

You will notice the dot notation in "objectKey.settings". This notation allows you to describe a path to the data you want to match.

Running the above query against the above data array should result in:

```json
[
  {
    "id": 1,
    "objectKey": {
      "settings": true
    }
  }
]
```

Good luck!
