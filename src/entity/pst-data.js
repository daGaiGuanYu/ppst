class PstData{
  constructor(data){
    this.data = data
  }
  putData({keys, filename}, link){
    let data = this.data
    let k
    while(k = keys.shift()){
      if(!data[k])
        data[k] = {}
      data = data[k]
    }

    data.filename = filename
    data.link = link
  }
}

module.exports = PstData