//@ts-check

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
    // TODO
    data.filename = filename
    data.link = link
  }
}

function parseName(name){
  if(!name){
    console.error('忘记写文件名了？')
    process.exit()
  }
  let [keys, filename] = name.split('/')
  keys = keys.split('.')
  for(let key of keys)
    if(!key){
      console.error('文件名格式有误')
      process.exit()
    }
  
  return { keys, filename }
}

module.exports = PstData