import fs from 'fs';
import path from 'path';

export function navigateUp(currentDirectory) {
  const parentDirectory = path.dirname(currentDirectory);
  if (parentDirectory !== currentDirectory) {
    currentDirectory = parentDirectory;
    console.log(`Вы находитесь в директории ${currentDirectory}`);
  }
}

export function navigateToDirectory(currentDirectory, directory) {
  const newPath = path.resolve(currentDirectory, directory);
  if (fs.existsSync(newPath) && fs.lstatSync(newPath).isDirectory()) {
    currentDirectory = newPath;
    console.log(`Вы находитесь в директории ${currentDirectory}`);
  } else {
    console.log('Некорректный ввод');
  }
}

export function listFilesAndFolders(currentDirectory) {
  const items = fs.readdirSync(currentDirectory).sort();
  items.forEach((item) => {
    const itemPath = path.join(currentDirectory, item);
    const itemType = fs.lstatSync(itemPath).isDirectory() ? 'Директория' : 'Файл';
    console.log(`${item}\t${itemType}`);
  });
}

export function exitFileManager(username) {
  console.log(`Спасибо, что использовали Файловый Менеджер, ${username}, до свидания!`);
  process.exit(0);
}