const fs = require('fs')

const setData = mode => (err, data) => {
  let [topic, ...details] = data.split('\n')
  console.log(details.map(value => value.split(',')))
}

fs.readFile('./hangman/country.csv', 'utf8', setData(1))
fs.readFile('./hangman/sport.csv', 'utf8', setData(1))
