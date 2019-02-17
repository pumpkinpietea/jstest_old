'use strict'

function arrayCal(arr, arrLength) {
  const inclease = quickSort(arr, 0, arrLength - 1)
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
    inclease[arrLength - 1] +
    '\n最小値: ' +
    inclease[0] +
    '\n小さい順: ' +
    inclease +
    '\n大きい順: ' +
    declease
  return outputText
}

function quickSort(numbers, left, right) {
  const leftHold = left
  const rightHold = right
  let pivot = numbers[left]
  while (left < right) {
    while (numbers[right] >= pivot && left < right) {
      right--
    }
    if (left !== right) {
      numbers[left] = numbers[right]
      left++
    }
    while (numbers[left] <= pivot && left < right) {
      left++
    }
    if (left !== right) {
      numbers[right] = numbers[left]
      right--
    }
  }
  numbers[left] = pivot
  pivot = left
  left = leftHold
  right = rightHold
  if (left < pivot) {
    quickSort(numbers, left, pivot - 1)
  }
  if (right > pivot) {
    quickSort(numbers, pivot + 1, right)
  }
  return numbers
}

const inputArray = [20, 31, 42, 13, 5, 38]
// const inputArray = [20, 3, 4, 5, 6, 7, 8, 9, 123, 345]
console.log(arrayCal(inputArray, inputArray.length))
