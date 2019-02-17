'use strict'

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const initialNumber = []
for (let i = 0; i < 4; i++) {
  const n = Math.floor(Math.random() * numberArray.length)
  initialNumber.push(numberArray[n])
  numberArray.splice(n, 1)
}
console.log(initialNumber)
console.log(numberArray)
// let inputNumber = parseInt(window.prompt('0-100で数字を当てて'))
// let counter = 1
// let status = ''
// console.log(inputNumber)
// console.log('正解！・・・' + counter + '回目で当てました')
