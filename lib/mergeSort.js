const mergeSort = arr => {
  if(arr.length <= 1) {
    return arr;
  }
  const divideLine = Math.ceil(arr.length /2);
  let leftArray = (arr.slice(0, divideLine));
  let rightArray = (arr.slice(divideLine));
  
  return sort(mergeSort(leftArray), mergeSort(rightArray));
};

const sort = (leftArr, rightArr) => {
  let newArr = [];
  let i = 0;
  let j = 0;
  while(i < leftArr.length && j < rightArr.length) {
    if(leftArr[i] < rightArr[j]) {
      newArr.push(leftArr[i]);
      i++;
    } else {
      newArr.push(rightArr[j]);
      j++;
    }
  }
  return [...newArr, ...leftArr.slice(i), ...rightArr.slice(j)];
}


module.exports = {
  mergeSort
}