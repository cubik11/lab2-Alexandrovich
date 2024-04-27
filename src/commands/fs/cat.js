import { createReadStream } from 'fs';
import { resolve as resolvePath } from 'path';
import { cwd } from 'process';

export const cat = async (path) => {
   await new Promise((res, rej) => {
      const filePath = resolvePath(cwd(), path);
      const stream = createReadStream(filePath, { encoding: 'utf8' });
  
      stream.on('data', (chunk) => {
        console.log(chunk);
      });
      stream.on('error', rej);
      stream.on('end', res);
    });
};