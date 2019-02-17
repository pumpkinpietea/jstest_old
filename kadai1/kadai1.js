'use strict'

function fizzbuzz(n) {
  const outputArray = []
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 15 === 0) {
      outputArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      outputArray.push('Fizz')
    } else if (i % 5 === 0) {
      outputArray.push('Buzz')
    } else {
      outputArray.push(i)
    }
  }
  console.log(outputArray.join())
}

const inputNumber = parseInt(window.prompt('数字を入力してください。'))
fizzbuzz(inputNumber)
