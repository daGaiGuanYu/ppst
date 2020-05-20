const FS = require('fs')
const Path = require('path')

module.exports = function(){
  const path = Path.join(__dirname, '../../package.json')
  let result = FS.readFileSync(path)
  return JSON.parse(result).version
}