import { readdir } from 'fs/promises';
import { resolve } from 'path';

const name_title = 'name';
const type_title = 'type';

const file_value = 'file';
const dir_value = 'directory';

export const ls = async () => {
  const currentDir = resolve(process.cwd());
  const filesList = await readdir(currentDir, { withFileTypes: true });
  const list = filesList
    .filter(typeFilter)
    .map(table)
    .sort(typeSort);

  console.table(list);
};

const typeFilter = (file) => {
  return file.isDirectory() || file.isFile();
};

const table = (file) => {
  return {
    [name_title]: file.name,
    [type_title]: file.isFile() ? file_value : dir_value,
  };
};

const typeSort = (a, b) => {
  return a.type === b.type
    ? a.name.localeCompare(b.name)
    : a.type === file_value ? 1 : -1;
};