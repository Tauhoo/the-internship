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
    readline.close()
    resolve(input)
  })

module.exports = { askCategory }
