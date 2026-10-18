import type { promises } from 'dns';
import * as fs from 'fs/promises';
async function readFile() : Promise<string>{
    try{
        const fileContent : string = await fs.readFile('/home/manda/Documents/dossierEnv/.env', {encoding : 'utf8'});
        console.log(fileContent);
        return fileContent as string;     
    }
    catch(error){
        console.log(error);
        return error as string ; 
    }
} 
function parseFile(fileContent :string){
        const contentByRow = fileContent.split(/\r?\n/);
        const contentParse = contentByRow.map((row) => row.replace(/[ \t]+/g, ''));
        console.log(contentParse);
        const finalParse = contentParse.join("\n");
        console.log(finalParse);
        return finalParse;
}
const fileContent = await readFile();
parseFile(fileContent);