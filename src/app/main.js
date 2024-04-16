import readline from 'readline';
import { navigateUp, navigateToDirectory, listFilesAndFolders, exitFileManager } from './operations.js';

const username = process.argv[2];
let currentDirectory = process.cwd();

console.log(`Добро пожаловать в Файловый Менеджер, ${username}!`);
console.log(`Вы находитесь в директории ${currentDirectory}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('> ');
rl.prompt();

rl.on('line', (line) => {
  const [command, ...args] = line.trim().split(' ');

  switch (command) {
    case 'up':
      navigateUp(currentDirectory);
      break;
    case 'cd':
      navigateToDirectory(currentDirectory, args[0]);
      break;
    case 'ls':
      listFilesAndFolders(currentDirectory);
      break;
    case '.exit':
      exitFileManager(username);
      break;
    default:
      console.log('Некорректный ввод');
      break;
  }

  rl.prompt();
});