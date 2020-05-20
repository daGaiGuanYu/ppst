const FS = require('fs')

const { read } = require('../service/ppst.io')
const axios = require('axios')

module.exports = function(){
  const key = process.argv[3]
  if(!key){
    console.error('你要下载哪个文件，写在 p 后面')
    return
  }

  const all = read()
  const link = all[key]
  
  if(!link){
    console.error('你好像还没添加过这个文件：' + key)
    return
  }

  axios(link).then( res => {
    FS.writeFileSync(getFilename(link), res.data)
    console.log('ok')
  }).catch( e => {
    console.error(`链接检查一下（需要正经的 http 链接）？${link}？检查一下你的电脑还有网吗？`)
  })
}

function getFilename(link){
  let arr = link.split('/')
  return arr[arr.length-1]||'未命名的文件'
}