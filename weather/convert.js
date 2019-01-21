const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const { xml2js } = require('xml-js')

convert = async (input, output) => {
  const xml = await readFile(input)
  const obj = xml2js(xml)
  let result = '{\n'
  obj.elements.forEach((val, index) => {
    result += deXml(val, 2, index === obj.elements.length - 1)
  })
  result += '}\n'
  return result
}

const deXml = (elem, round, islast) => {
  let text = ''
  let space = new Array(round).join('  ')
  if (elem.type === 'element') {
    let { name, attributes, elements } = elem
    text += space + `"${name}":{\n`

    if (attributes != undefined) {
      let keys = Object.keys(attributes)
      keys.forEach((val, index) => {
        text +=
          space +
          `    "${val}":"${attributes[val]}"${
            index === keys.length - 1 ? '' : ','
          }\n`
      })
    }
    if (elements != undefined)
      elements.forEach((val, index) => {
        text += deXml(val, round + 1, index == elements.length - 1)
      })
    text += space + `}${islast ? '' : ','}\n`
  } else if (elem.type === 'text') {
    text = space + `"${elem.text}"${islast ? '' : ','}\n`
  } else {
    return ''
  }
  return text
}

module.exports = convert
