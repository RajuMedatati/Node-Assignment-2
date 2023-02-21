const readline = require("readline")

let readLine = readline.createInterface(
    process.stdin,process.stdout
)

readLine.question('Please enter your name: ',(Name)=>{
    console.log("Hello ",Name)
    readLine.close();
}
)