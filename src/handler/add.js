// @ts-check
const io = require('../io/index')

module.exports = function(){
  let name = process.argv[3]
  let link = process.argv[4]
  io.add(name, link)
  io.save()
  console.log('ok')
}
