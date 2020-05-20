const getAll = require('./service/get')

module.exports = function(){
  const namespace = process.argv[3] || ''
  let all = getAll()
  
  const keys = namespace.split('.')
  let k
  while(k = keys.shift()){
    if(!k) continue
    
    if(all[k])
      all = all[k]
    else
      throw Error('未找到' + namespace)
  }
  console.log(all)
}