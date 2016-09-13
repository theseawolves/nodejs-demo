const async = require('async')
const fs = require('fs')

async.map(['file1.md','file2.md'], fs.stat, function(err,results){
  if(err){
    console.log(err)
  }
  console.log(results)
})
