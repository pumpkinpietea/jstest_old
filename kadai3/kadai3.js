'use strict'

const computerNumber = Math.floor(Math.random() * 3)
let inputNumber = parseInt(window.prompt('「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー'))
let status = ''
while (computerNumber !== inputNumber) {
  if (computerNumber == > inputNumber) {
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
