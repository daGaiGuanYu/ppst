// @ts-check

const FS = require('fs')

const PstData = require('../entity/pst-data')
const { filePath } = require('../constant')

exports.read = function(){  
  if(!FS.existsSync(filePath))
    FS.writeFileSync(filePath, JSON.stringify({}))

  return new PstData(JSON.parse(FS.readFileSync(filePath, 'utf8')))
}

/**
 * @param {PstData} data
 */
exports.write = function(data){
  FS.writeFileSync(filePath, JSON.stringify(data.data))
}