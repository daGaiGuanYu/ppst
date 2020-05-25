// @ts-check
const { read, write } = require('../service/io')

module.exports = function(){
  let name = process.argv[3]
  let link = process.argv[4]
  let all = read()
  all.putData(name, link)
  write(all)
  console.log('ok')
}
