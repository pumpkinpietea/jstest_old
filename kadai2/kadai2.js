'use strict'

const inputText = window.prompt('文字を入力してください。')
const splitString = /[,.\s]/
const inputArray = inputText.split(splitString)

inputArray.sort()
let counter = 1
const outputObject = new Map()
let oldValue = ''
for (const newValue of inputArray) {
  if (oldValue === newValue) {
    counter += 1
  } else {
    outputObject.set(oldValue, counter)
    counter = 1
  }
  oldValue = newValue
}
outputObject.set(oldValue, counter)
outputObject.delete('')
console.log(outputObject)
