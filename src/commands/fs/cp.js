import { createReadStream, createWriteStream } from 'fs';
import { basename, resolve } from 'path';

export const cp = async (path, newPath) => {
   const srcPath = resolve(process.cwd(), path);
   const fileName = basename(srcPath);
   const destPath = resolve(process.cwd(), newPath);
   const fileToWritePath = resolve(destPath, fileName);
   try {
      await new Promise(async (res, rej) => {
         const file = createReadStream(srcPath, { encoding: 'utf8' });
         const copy = createWriteStream(fileToWritePath, {
         });

         file.pipe(copy);
         file.on('error', rej);
         file.on('end', res);
      });
   } catch (error) {
      throw error;
   }
}
