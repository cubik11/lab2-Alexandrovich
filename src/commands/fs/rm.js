import { rm as rmFile} from 'fs/promises';
import { resolve } from 'path';

export const remove = async (path) => {
    const filePath = resolve(process.cwd(), path);
    await rmFile(filePath);
};
