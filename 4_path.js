const path = require('path');

let ext = path.extname('C:\\coding\\web devlopment\\Node\\f1.txt')
console.log(ext)

let basename=path.basename('C:\\coding\\web devlopment\\Node\\f1.txt')
console.log('Base name ->'+basename)

console.log(__dirname)
console.log(__filename)