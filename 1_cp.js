const cp = require('child_process')

// console.log('trying to open calc')
// cp.execSync('calc')

console.log('try to open vs code')
const ans =cp.execSync("node test.js")
console.log("output ->"+ans)
// cp.execSync("code")
// cp.execSync("start brave")
// cp.execSync('start brave https://www.youtube.com/watch?v=K5xJXbnYMBc&t=154s')