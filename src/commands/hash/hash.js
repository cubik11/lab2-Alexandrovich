import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';

import { hash_success } from '../../common/messages.js';
import { consoleColors } from '../../utils/consoleColors.js'

export const calculateHash = async (path) => {
    const filePath = resolve(cwd(), path);
    const buffer = await readFile(filePath);
    const hash = createHash('sha256').update(buffer).digest('hex');
    console.log(consoleColors.green, hash_success);
    console.log(`Hash: ${hash}`)
};