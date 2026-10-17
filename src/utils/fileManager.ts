import * as fs from 'fs/promises';
async function readFile(){
    try{
        const fileContent = await fs.readFile('/home/manda/Documents/dossierEnv/.env', {encoding : 'utf8'});
        console.log(fileContent);
    }
    catch(error){
        console.log(error);
    }

}
readFile(); 

