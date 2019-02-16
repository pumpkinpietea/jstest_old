'use strict'

const inputtext = window.prompt('文字を入力してください。')
const splitstring = /[,.\s]/
const inputarray = inputtext.split(splitstring)

inputarray.sort()
let counter = 1
const outputObject = new Map()
let oldValue = ''
for (const newValue of inputarray) {
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
