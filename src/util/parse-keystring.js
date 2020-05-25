// @ts-check

/**
 * @param {string} keyString
 * @returns {Array}
 */
module.exports = function(keyString){
  if(!keyString){
    console.error('忘记填文件名了？')
    process.exit()
  }
  let result = keyString.split('.')
  for(let key of result)
    if(!key){
      console.error('文件名格式有误')
      process.exit()
    }
  return result
}