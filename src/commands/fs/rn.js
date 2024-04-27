import { rename } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';

export const rn = async (currentName, newName) => {
    const filePath = resolve(cwd(), currentName);
    const newFile = resolve(cwd(), newName);
    await rename(filePath, newFile);
};