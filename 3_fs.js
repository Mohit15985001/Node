const fs = require("fs")

// let folderPath = 'C:\\coding\\web devlopment\\Node\\myDir'

// let content = fs.readFileSync("f1.txt")
// console.log("f1 data ->" + content)

// fs.writeFileSync("f1.txt","this is the new data that will be written on f1")
// fs.writeFileSync("f3.txt", "this data will go in f3")
// console.log("f1 data ->" + content)
// fs.appendFileSync('f3.txt','this is an updated data')
// fs.mkdirSync("myDir")
// console.log('directory created')
// fs.rmdirSync('myDir')

let srcFilePath = 'C:\\coding\\web devlopment\\Node\\f1.txt'
let destinatioPath = 'C:\\coding\\web devlopment\\Node\\myDir2'

let tobecopiedFileName = path.basename(srcFilePath)
console.log(tobecopiedFileName)

let destPath = path.join(destinatioPath,tobecopiedFileName)
console.log(destPath)