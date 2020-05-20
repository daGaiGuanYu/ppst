const FS = require('fs')

const { filePath } = require('../constant/')

module.exports = function(){  
  if(!FS.existsSync(filePath))
    FS.writeFileSync(filePath, JSON.stringify({}))

  return JSON.parse(FS.readFileSync(filePath))
}