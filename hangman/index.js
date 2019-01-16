const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const { askCategory } = require('./inputs.js')

const formData = data => {
  let [topic, ...details] = data.split('\n')
  return details.map(value => value.split(','))
}

const inGame = async categories => {
  let category = categories[await askCategory()]
  let choice = Math.ceil(Math.random() * category.length) - 1
  let [answer, hint] = category[choice]
  console.log('hint : ' + hint)
}

;(async () => {
  let weather, country
  weather = await readFile('./hangman/country.csv', 'utf8').then(formData)
  country = await readFile('./hangman/sport.csv', 'utf8').then(formData)
  inGame([weather, country])
})()
