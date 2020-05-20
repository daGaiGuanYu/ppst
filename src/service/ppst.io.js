const FS = require('fs')

const { filePath } = require('../constant')

exports.read = function(){  
  if(!FS.existsSync(filePath))
    FS.writeFileSync(filePath, JSON.stringify({}))

  return JSON.parse(FS.readFileSync(filePath))
}

exports.write = function(data){
  FS.writeFileSync(filePath, JSON.stringify(data))
}