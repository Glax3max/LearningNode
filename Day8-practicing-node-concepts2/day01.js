import fs from "node:fs";



async function  readFileContent() {
    const data = await fs.readFileSync("data-file.txt","utf-8");
    console.log(data);
}


readFileContent()