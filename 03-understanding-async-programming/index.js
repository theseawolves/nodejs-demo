const fs = require('fs')

console.log('start reading a file...')

fs.readFile('file.md', 'utf-8', function(err, content){
  if (err) {
    return console.error(err)
  }
  console.log(content)
})

console.log('end of the file')
