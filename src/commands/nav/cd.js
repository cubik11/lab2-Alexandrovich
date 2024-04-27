import { resolve } from 'path';
import { chdir, cwd } from 'process';

export const cd = (path) => {
  chdir(resolve(cwd(), path));
};
