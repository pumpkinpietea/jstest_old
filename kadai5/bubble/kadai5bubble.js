'use strict'

function arrayCal(arr,arrLength) {
  const inclease = bubbleSort(arr,arrLength)
  const declease = []
  let sumNumber = 0
  for (let i = 0; i < arrLength; i++) {
    declease.unshift(inclease[i])
    sumNumber += inclease[i]
  }
  const outputText =
    '合計： ' +
    sumNumber +
    '\n平均: ' +
    sumNumber / arrLength +
    '\n最大値: ' +
    inclease[arrLength-1] +
    '\n最小値: ' +
    inclease[0] +
    '\n小さい順: ' +
    inclease +
    '\n大きい順: ' +
    declease
  return outputText
}

function bubbleSort(numbers,arrLength) {
  for (let i = 0; i < arrLength-1; i++) {
    for (let j = arrLength-1; j > i; j--) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j - 1]
        numbers[j - 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}

//const inputArray = [20, 31, 42, 13, 5, 38]
const inputArray = [20]
console.log(arrayCal(inputArray,inputArray.length))
