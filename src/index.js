#!/usr/bin/env node

function go(){
  console.log(process.cwd())
  console.log(__dirname)
  console.log(process.argv)
}

go()