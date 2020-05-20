const Path = require('path')
const OS = require('os')

module.exports = {
  filePath: Path.join(OS.homedir(), '.ppst.json')
}
