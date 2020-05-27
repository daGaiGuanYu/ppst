// @ts-check
const FS = require('fs')
const Path = require('path')
const axios = require('axios').default

const currentPath = process.cwd() // current working directory
const pathStack = [currentPath]

module.exports = function d(target, key, name){
  if(!target) // 什么也不是
    return
  else if(target.link && target.link.constructor == String) // 是一个文件
    dFile(target, name)
  else { // 是一个文件夹
    pathStack.push(name||key)
    for(let k in target)
      d(target[k], k)
    pathStack.pop()
  }
}

function dFile(target, name){
  let path = Path.join(...pathStack)
  if(!FS.existsSync(path))
    FS.mkdirSync(path, { recursive: true })

  let filename = name||target.filename||getFilenameFromLink(target.link)
  let filePath = getFilepath(path, filename)
  
  axios(target.link)
    .then( res => {
      FS.writeFileSync(filePath, res.data)
      console.log('下载成功 +1')
    })
    .catch( e => console.error('下载错误 +1') )
}

function getFilenameFromLink(link){
  const arr = link.split('/')
  return arr[arr.length-1] || '未命名的ppst文件'
}

// 合并路径、去除重名
let duplicationNumber = 0
function getFilepath(path, filename){
  let result = Path.join(path, filename)
  if(FS.existsSync(result)){
    filename += ('重名文件' + (duplicationNumber++))
    return getFilepath(path, filename)
  }
  return result  
}