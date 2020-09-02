#! /usr/bin/env node

const { spawn } = require("child_process")
const { exec } = require("child_process");

const name = process.argv[2];

if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
    return console.log(`
    Invalid directory name.
    Usage: shortping-express-generator <folder>  
  `);
}

var child = exec("git clone https://github.com/ShortyPing/express-basic-starter.git " + name, (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    if(stderr) {
        console.log(stderr);
        return;
    }
    console.log(stdout)

    
})

child.on("close", () => {
    exec("cd " + name + " && " + "npm i", (err, stdout, stderr) => {
        if(err) {
            console.log(err);
            return;
        }
        if(stderr) {
            console.log(stderr);
            return;
        }
        console.log(stdout)

        console.log(" ")
        console.log("Finished")
        console.log("Express App generator by ShortPing")
        console.log("")
    
        
    })
})


