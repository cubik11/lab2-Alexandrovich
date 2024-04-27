import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';

export const add = async (path) => {
  const filePath = resolve(cwd(), path);
  await writeFile(filePath, '');
};
