'use strict'

function sumNumber(n) {
  if (n !== 0) {
    return n + sumNumber(n - 1)
  }
  return 0
}

const inputNumber = parseInt(window.prompt('数字を入力してください。'))
console.log(sumNumber(inputNumber))
