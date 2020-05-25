// @ts-check
const FS = require('fs')

module.exports = function(filePath){
  if(!FS.existsSync(filePath))
    FS.writeFileSync(filePath, JSON.stringify({}))

  return JSON.parse(FS.readFileSync(filePath, 'utf8'))
}