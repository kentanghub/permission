import{copyFileSync,mkdirSync}from'node:fs';
import{fileURLToPath}from'node:url';
import{dirname,join}from'node:path';

const here=dirname(fileURLToPath(import.meta.url));
const output='/output';
mkdirSync(output,{recursive:true});
const destination=join(output,'entry.txt');
copyFileSync(join(here,'poem.txt'),destination);