const fs = require('fs')

function stats(file){
  return new Promise((resolve,reject) => {
    fs.stat(file,function(err,data){
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}

Promise.all([
  stats('file1.md'),
  stats('file2.md'),
  stats('file.md')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
