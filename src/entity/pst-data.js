//@ts-check
const parseKeystring = require('../util/parse-keystring')

class PstData{
  constructor(data){
    this.data = data
  }

  /**
   * @param {string} name 
   * @param {string} link 
   */
  putData(name, link){
    if(!name){
      console.error('忘记写文件名了？')
      process.exit()
    }
    if(!link){
      console.error('忘记写链接了？')
      process.exit()
    }

    let data = this.data
    let { keys, filename } = parseName(name)

    let lastKey = keys.pop()
    let k
    while(k = keys.shift()){
      if(!data[k])
        data[k] = {}
      data = data[k]
    }
    if(data[lastKey]){
      console.error(`文件名重复了（已经有叫${lastKey}的文件了)`)
      process.exit()
    }
    data[lastKey] = {
      filename, link
    }
  }
}

function parseName(name){
  if(!name){
    console.error('忘记写文件名了？')
    process.exit()
  }
  let [keys, filename] = name.split('/')
  keys = parseKeystring(keys)
  
  return { keys, filename }
}

module.exports = PstData