#!/usr/bin/env node
const fs = require('fs')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)

const convert = require('./convert')

;(async () => {
  const path = process.cwd()
  const command = process.argv
  const input = `${path}/${command[2]}`
  const output = `${path}/${command[3]}`
  const json = await convert(input, output)
  await writeFile(output, json)
  console.log(json, output)
})()
