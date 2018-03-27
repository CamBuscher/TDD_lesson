let insertionSort = arr => {
  let sortedArray = [];
  let sortNewArray = sortedArrayPosition => {
    if (arr.length === 0) {
    return sortedArray;
    }
    sortedArray.push(arr.shift());
    if(arr[sortedArrPosition] < arr[sortedArrPosition - 1]) {
      [ arr[sortedArrPosition] ] = [ arr[sortedArrPosition -1 ] ];
      sortNewArray(sortedArray.length - 1)
    }
  }
  sortNewArray(sortedArray[sortedArray.length])
  // shift first value out of arr & push it to sorted
  // compare it to value at sorted end
  // if less than value, swap places
  // check next value, until properly sorted
}



module.exports = insertionSort;