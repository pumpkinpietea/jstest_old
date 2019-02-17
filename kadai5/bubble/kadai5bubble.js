'use strict'

function arrayCal(arr) {
  const inclease = bubbleSort(arr)
  const declease = []
  let sumNumber = 0
  for (let i = 0; i < 6; i++) {
    declease.unshift(inclease[i])
    sumNumber += inclease[i]
  }
  const outputText =
    '合計： ' +
    sumNumber +
    '\n平均: ' +
    sumNumber / 6 +
    '\n最大値: ' +
    inclease[5] +
    '\n最小値: ' +
    inclease[0] +
    '\n小さい順: ' +
    inclease +
    '\n大きい順: ' +
    declease
  return outputText
}

function bubbleSort(numbers) {
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j - 1]
        numbers[j - 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}

const inputArray = [20, 31, 42, 13, 5, 38]
console.log(arrayCal(inputArray))
