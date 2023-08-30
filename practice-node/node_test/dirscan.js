const path = require('path');
const fs = require('fs');


const FileType = {
  File: 'file',
  Directory: 'directory',
  Unknown: 'unknow',
}


const getFileType = path => {
  try {
    const stat = fs.statSync(path)

    switch (true) {
      case stat.isFile():
        return FileType.File

      case stat.isDirectory():
        return FileType.Directory;

      default:
        return FileType.Unknown;
    }
  }
  catch (e) {
    return FileType.Unknown;
  }
}


const listFiles = dirPath => {
  const ret = [];
  const paths = fs.readdirSync(dirPath);
  console.log(paths)
  
  paths.forEach(a => {
    const path = `${dirPath}/${a}`
    console.log(path)

    switch (getFileType(path)) {
      case FileType.File:
        ret.push(path);
        break;

      case FileType.Directory:
        ret.push(...listFiles(path));
        break;

      default:
    }
  })

  return ret
}


const dirPath = path.resolve(__dirname, '/Volumes/TEST/')
const list = listFiles(dirPath);

console.log(list);

module.exports = list