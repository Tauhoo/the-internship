const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const { askCategory, getGuess, end, askForNewRound } = require('./inputs.js')

const formData = data => {
  let [topic, ...details] = data.split('\n')
  return details.map(value => value.split(','))
}

const inGame = async categories => {
  let category = categories[(await askCategory()) - 1]
  let choice = Math.ceil(Math.random() * category.length) - 1
  let [answer, hint] = category[choice]
  console.log('\nhint : ' + hint + '\n')
  let data = { exGuess: [...answer].map(() => '_'), guessWrong: 0, exScore: 0 }
  while (data.guessWrong <= 10 && data.exGuess.join('') !== answer)
    data = await getGuess(data, answer)
  let isWin = data.exGuess.join('') === answer ? 'win' : 'lose'
  console.log(`
You are ${isWin} !!!
guess correct : ${11 - data.guessWrong}/11 time
correct : ${data.exScore}/${answer.length} letter
score : ${11 + data.exScore - data.guessWrong}/${answer.length + 11}
  `)
}

;(async () => {
  const weather = await readFile('./hangman/country.csv', 'utf8').then(formData)
  const country = await readFile('./hangman/sport.csv', 'utf8').then(formData)

  do {
    await inGame([weather, country])
  } while (await askForNewRound())

  end()
})()
