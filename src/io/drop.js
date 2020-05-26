module.exports = function(keys, data){
  let kBackup = keys.slice()
  // 检测数据存在与否
  let lastKey = keys.pop()
  let k
  while(k = keys.shift()){
    if(!data[k])
      notExist(kBackup)
    data = data[k]
  }
  if(!data[lastKey])
    notExist(kBackup)
  
  // 检测是不是文件夹
  if(!(data[lastKey].link && data[lastKey].link.constructor == String)){
    console.error(`检测到 ${kBackup.join('.')} 是一个文件夹，删除文件夹请使用： ppst delete-folder [文件夹名]`)
    process.exit()
  }

  // 删
  delete data[lastKey]
}

function notExist(keys){
  console.error(`数据 ${keys.join('.')} 不存在`)
  process.exit()
}