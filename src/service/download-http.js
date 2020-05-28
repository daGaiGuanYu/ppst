// @ts-check
const http = require('https')
const FS = require('fs')

module.exports = function(url, targetPath){
  return new Promise( (resolve, reject) => {
    http.get(url, res => {
      const { statusCode } = res
      if(statusCode != 200){
        reject()
        res.resume() // Consume response data to free up memory
        return
      }

      FS.writeFileSync(targetPath, '')
      let wStream = FS.createWriteStream(targetPath)

      res.pipe(wStream)
      res.on('end', resolve)
    })
  })
}