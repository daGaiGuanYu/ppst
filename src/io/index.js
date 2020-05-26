const read = require('./read')
const addData = require('./add')
const FS = require('fs')
const Path = require('path')
const OS = require('os')

const filePath = Path.join(OS.homedir(), '.ppst.json')

let data
function getData(){
  if(!data)
    data = read(filePath)
  return data
}

function save(){
  FS.writeFileSync(filePath, JSON.stringify(data))
}

/**
 * @param {string} name 
 * @param {string} link 
 */
function add(name, link){
  addData(name, link, getData())
}

/**
 * @param {Array<String>} keys 
 */
function drop(keys){
  require('./drop')(keys, getData())
}

module.exports = {
  getData, add, save, drop
}