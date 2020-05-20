const { read, write } = require('../service/ppst.io')

module.exports = function(){
  let name = process.argv[3]
  name = parseName(name)
  if(!name) return
  let link = process.argv[4]
  if(!link) return 

  let all = read()
  
  all.putData(name, link)
  write(all)
  console.log('ok')
}

function parseName(name){
  if(!name){
    console.error('忘记写文件名了？')
    return
  }
  let [keys, filename] = name.split('/')
  keys = keys.split('.')
  for(let key of keys)
    if(!key){
      console.error('文件名格式有误')
      return
    }
  
  return { keys, filename }
}