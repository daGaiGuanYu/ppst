#!/usr/bin/env node
const getVersion = require('./service/get-version')

const str = {
  page: '\n不熟悉我的话，可以看看这个网页 https://github.com/daGaiGuanYu/ppst',
  version: '\nv' + getVersion()
}
const directiveMap = {
  ls: require('./handler/ls'),
  add: require('./handler/add'),
  'add-folder': require('./handler/add-folder'),
  p: require('./handler/p'),
  delete: require('./handler/delete')
}

function go(){
  let directive = process.argv[2]
  if(!directive){
    console.log('你好我是 ppst，一个模版文件管理工具' + str.page + str.version)
    return
  }

  let task = directiveMap[directive]
  if(!task){
    console.log('未知的命令：' + directive + str.page + str.version)
    return
  }
  task()
}

go()