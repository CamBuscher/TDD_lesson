

const split = arr => {
  let newArr = []
  const divideLine = Math.ceil(arr.length /2);
  newArr.push(arr.slice(0, divideLine))
  newArr.push(arr.slice(divideLine))
  return keepSplitting(newArr)  
}

const keepSplitting = arr => {
  if(arr.every(el => el.length === 1)) {
    return arr;
  }
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j <1; j++){
      const divideLine = arr[i].length /2;
      let part1 = arr[i].slice(0, divideLine)
      let part2 = arr[i].slice(divideLine)
      if (part1.length) {
        newArr.push(part1);
      }
      if (part2.length) {
        newArr.push(part2)
      }
    }
  }
  return keepSplitting(newArr)
}

module.exports = {
  mergeSort
}