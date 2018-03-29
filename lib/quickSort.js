const quickSort = arr => {
  if(arr.length <= 1) {
    return arr;
  }
  let p = arr.length - 1;
  let i = -1;
  let j = 0;
  while(j < p) {
    if(arr[j] < arr[p]) {
      i++
      [ arr[j], arr[i] ] = [ arr[i], arr[j] ]
    } 
    j++;
  }
  [ arr[i + 1], arr[p] ] = [ arr[p], arr[i+1] ]
  
  let lessThan = arr.slice(0, i+1);
  let greaterThan = arr.slice(i+2)
  return [...quickSort(lessThan), arr[i+1], ...quickSort(greaterThan)]
}

module.exports = {
  quickSort
}