const fs = require('fs')
const path = require('path')
const list = require('./dirscan')

const args = process.argv
const runtime = args.shift(), script = args.shift()
const keyword = args.shift()
const args_dir = args.shift()

const target_dir = (args_dir === undefined) ? "."  : args_dir;

if(keyword === undefined) {
  console.log("[USAGE] serch.js (keyword)");
  process.exit()
}

console.log("#keyword=" + keyword);
console.log("#target=" + target_dir);

// console.log(list)

const searchDir = (dir) => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const fullpath = path.join(dir, file)
    const stat = fs.statSync(fullpath)
    if(stat.isFile()) searchFile(dir, file)
    if(stat.isDirectory()) searchDir(fullpath)
  })
}

const searchFile = (dir, file) => {
  if (file.indexOf(keyword) >= 0) {
    console.log("-", dir+"/"+file)
  }
}

searchDir(target_dir);
