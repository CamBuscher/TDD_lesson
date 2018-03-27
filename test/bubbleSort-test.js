const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../lib/bubbleSort.js')
const arrayGenerator = require('../lib/arrayGenerator.js')

describe('bubbleSort', () => {

  it('should be a function', () => { 
    assert.isFunction(bubbleSort, true)
  })

  it('should sort an array of numbers', () => {
    let array = [24, 21, 123, 344, 9, 5, 10]

    let sortedArray = bubbleSort(array);

    assert.deepEqual(sortedArray, [5, 9, 10, 21, 24, 123, 344])
  })

  it('should sort a large array of numbers', () => {
    let array = arrayGenerator(10000, 15000);
    let sortedArray = bubbleSort(array);

    assert.deepEqual(sortedArray, array.sort())
  })

})

