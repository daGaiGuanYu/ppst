const { read, write } = require('../service/io')
const parseKeystring = require('../util/parse-keystring')

module.exports = function(){
  let keys = parseKeystring(process.argv[3])

}