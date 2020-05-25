// @ts-check
const { read } = require('../service/io')
const parseKeystring = require('../util/parse-keystring')

module.exports = function(){
  console.log('建议直接打开家目录，查看 .ppst.json 文件（是一个隐藏文件）')

  const filename = process.argv[3] || ''
  let all = read().data
  
  if(!filename){
    console.log(all)
    return
  }

  const keys = parseKeystring(filename)
  let k
  while(k = keys.shift()){
    if(all[k])
      all = all[k]
    else
      throw Error('未找到' + filename)
  }
  console.log(all)
}