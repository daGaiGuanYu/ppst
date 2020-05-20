const { read, write } = require('../service/ppst.io')

module.exports = function(){
  let filename = process.argv[3]
  if(!filename){
    console.error('是不是忘记写文件名了？')
    return 
  }
  let link = process.argv[4]
  if(!link){
    console.error('是不是忘记写链接了？')
    return 
  }

  let all = read()
  all[filename] = link
  write(all)
  console.log('ok')
}