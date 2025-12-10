const fs = require('fs').promises;

async function readFileContent(path) {
    try{
        const content = await fs.readFile(path,'utf-8');
        await writeFileCOntent(content + content)
        console.log(content)
    }catch(error) {
        console.error(`Error reading from file : ${error.message}`)
    }
}

async function writeFileCOntent(content) {
    try {
        await fs.writeFile('./hello.txt',content);
    }catch(error) {
        console.error("Can not write file content",error.message);
    }
}

async function main() {
    for(let i = 0;i<5;i++) {
        await readFileContent('./hello.txt')
    }
}

main();