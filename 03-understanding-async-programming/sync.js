const fs = require('fs')
let content
try {
  content = fs.readFileSync('file.md','utf-8')
} catch (e) {
  console.log(e)
} finally {
  console.log(`The content is: ${content}`)
}
