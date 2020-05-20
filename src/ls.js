const getAll = require('./service/get')

module.exports = function(){
  const namespace = process.argv[3] || ''
  const all = getAll()

  for(let key of namespace.split('.')){
    
  }
}