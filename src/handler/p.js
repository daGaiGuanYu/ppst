// @ts-check
const FS = require('fs')

const parseKeystring = require('../util/parse-keystring')
const io = require('../io/index')
const download = require('../service/download')

module.exports = function(){
  const name = process.argv[3]
  if(!name){
    console.error('你要下载哪个文件，写在 p 后面')
    return
  }
  const [keyString, filename] = name.split('/')
  const keys = parseKeystring(keyString)
  const key = keys[keys.length - 1]

  const all = io.getData()
  const target = getTarget(all, keys)

  if(target.constructor == String){
    console.error('末尾不需要 .link 哦')
    process.exit()
  }
  
  download(target, key, filename)
}

function getTarget(all, keys){
  let lastKey = keys.pop()
  let k
  while(k = keys.shift())
    if(!all[k])
      notFound()
    else
      all = all[k]

  if(all[lastKey])
    return all[lastKey]
  notFound()

  function notFound(){
    console.error('未找到目标文件')
    process.exit()
  }
}