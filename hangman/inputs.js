const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

const getInput = text =>
  new Promise((resolve, reject) => {
    readline.question(text, value => {
      resolve(value)
    })
  })

const askForNewRound = async () => {
  let quesion = 'press (a) to play again or another to exit.\n>'
  return (await getInput(quesion)) === 'a'
}

const askCategory = async () => {
  let selectMenu = `
Select Category:
1. country
2. sport
    
press number to select.
>`
  let input = await getInput(selectMenu)
  while (input !== '1' && input !== '2')
    input = await getInput('Put 1 or 2. \n>')
  return input
}

const getGuess = async ({ exGuess, guessWrong, exScore }, answer) => {
  let answerField = exGuess.slice(1, exGuess.length).join('')
  let score = exScore
  let exGuessDisplay = `${exGuess[0].toUpperCase() +
    answerField}   score ${score}, remaining wrong guess ${10 - guessWrong}\n>`
  let input = (await getInput(exGuessDisplay)).toLowerCase()

  while (!/^[a-z]$/.test(input)) {
    input = await getInput('Put only a - z and A - Z.\n>')
  }

  while (exGuess.includes(input))
    input = await getInput('You already quess this letter try another.\n>')

  let newGuess
  let newGuessWrong = guessWrong

  if (answer.includes(input)) {
    newGuess = [...answer].map(value => {
      if (value === input) score++
      return exGuess.includes(value) || value === input ? value : '_'
    })
  } else {
    newGuess = exGuess
    newGuessWrong++
  }
  return { guessWrong: newGuessWrong, exGuess: newGuess, exScore: score }
}

const end = () => {
  readline.close()
}
module.exports = { askCategory, getGuess, end, getInput, askForNewRound }
