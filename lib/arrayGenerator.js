const arrayGenerator = (maxNum, arrayLength) => {
  let newArray = [];
  for(let i = 0; i < arrayLength; i++) {
    let num = Math.floor(Math.random() * Math.floor(maxNum))
    newArray.push(num)
  }
  return newArray
}

module.exports = {
  arrayGenerator
}