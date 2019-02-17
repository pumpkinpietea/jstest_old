'use strict'

const targetNumber = Math.floor(Math.random() * 101)
let inputNumber = parseInt(window.prompt('0-100で数字を当てて'))
let counter = 1
let status = ''
while (targetNumber !== inputNumber) {
  counter += 1
  if (targetNumber > inputNumber) {
    status = 'もっと上'
  } else {
    status = 'もっと下'
  }
  console.log(inputNumber)
  console.log(status)
  inputNumber = parseInt(window.prompt(inputNumber + '\n' + status))
}
console.log(inputNumber)
console.log('正解！・・・' + counter + '回目で当てました')
