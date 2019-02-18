'use strict'

const getInitialNumber = function() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const getNumber = []
  const firstNumber = 1 + Math.floor(Math.random() * 9)
  getNumber.push(numbers[firstNumber])
  numbers.splice(firstNumber, 1)
  for (let i = 0; i < 3; i++) {
    const n = Math.floor(Math.random() * numbers.length)
    getNumber.push(numbers[n])
    numbers.splice(n, 1)
  }
  return getNumber
}

const computerNumber = getInitialNumber()
let inputNumber = window.prompt('4桁の数字は？').split('')
let counter = 0
while (true) {
  console.log(inputNumber.join(''))
  let hitCount = 0
  let blowCount = 0
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (parseInt(inputNumber[i]) === computerNumber[j] && i === j) {
        hitCount += 1
      } else if (parseInt(inputNumber[i]) === computerNumber[j]) {
        blowCount += 1
      }
    }
  }
  counter += 1
  if (hitCount === 4) {
    break
  }
  const missMeessage = `外れ： ${hitCount}Hits, ${blowCount}Blow\n4桁の数字は？`
  console.log(missMeessage)
  inputNumber = window.prompt(computerNumber + '\n' + missMeessage).split('')
}
console.log(`${counter}回で正解！`)
