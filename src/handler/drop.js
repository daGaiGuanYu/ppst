// @ts-check
const io = require('../io/index')
const parseKeystring = require('../util/parse-keystring')

module.exports = function(){
  let keys = parseKeystring(process.argv[3])
  io.drop(keys)
  io.save()
  console.log('ok')
}