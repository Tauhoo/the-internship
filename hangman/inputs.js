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

const askCategory = () =>
  new Promise(async (resolve, reject) => {
    let selectMenu = `
Select Category:
1. country
2. sport
    
press number to select.
>`
    let input
    input = await getInput(selectMenu)
    while (input !== '1' && input !== '2')
      input = await getInput('Put 1 or 2. \n>')
    resolve(input)
  })

const getGuess = ({ exGuess, guessWrong, exScore }, answer) =>
  new Promise(async (resolve, reject) => {
    let answerField = exGuess.join('')
    let exGuessDisplay
    let score = exScore

    exGuessDisplay = `${answerField}   score ${score}, remaining wrong guess ${10 -
      guessWrong}\n>`
    let input = await getInput(exGuessDisplay)
    while (!/^[a-zA-Z]$/.test(input)) {
      input = await getInput('Put only a - z and A - Z.')
    }

    input = input.toLowerCase()

    while (exGuess.includes(input)) {
      input = await getInput('You already quess this letter try another.')
    }

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
    resolve({ guessWrong: newGuessWrong, exGuess: newGuess, exScore: score })
  })

const end = () => {
  readline.close
}
module.exports = { askCategory, getGuess, end }
