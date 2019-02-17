'use strict'

function janken() {
  const computer = Math.floor(Math.random() * 3)
  const sentence = '「じゃんけん・・・」\n 0.グー 1.チョキ 2.パー'
  const user = parseInt(window.prompt(sentence))
  console.log(sentence)
  console.log(user + '\n「ぽい！」\n＊コンピュータ：' + jankenText(computer) + '\n＊あなた　：' + jankenText(user))
  if (computer === user) {
    console.log('「あいこでしょ！」')
    janken()
  } else if ((computer === 0 && user === 2) || (computer === 1 && user === 0) || (computer === 2 && user === 1)) {
    console.log('「あなたの勝ち！」')
  } else if ((computer === 0 && user === 1) || (computer === 1 && user === 2) || (computer === 2 && user === 0)) {
    console.log('コンピュータの勝ち！')
  } else {
    console.log('error')
  }
}

function jankenText(n) {
  let outputText = ''
  switch (n) {
    case 0:
      outputText = 'グー'
      break
    case 1:
      outputText = 'チョキ'
      break
    case 2:
      outputText = 'パー'
      break
    default:
      outputText = 'error'
      break
  }
  return outputText
}

janken()
