import fs from 'fs-extra';
import path from 'path';

const currentDirectory = './'; // Текущий каталог

// Чтение содержимого текущего каталога
fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error('Ошибка при чтении каталога:', err);
    return;
  }

  // Фильтрация файлов и папок
  const directories = [];
  const regularFiles = [];

  files.forEach((file) => {
    const filePath = path.join(currentDirectory, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      directories.push(file);
    } else {
      regularFiles.push(file);
    }
  });

  // Сортировка папок и файлов по алфавиту
  directories.sort();
  regularFiles.sort();

  // Определение максимальной длины имени папки или файла
  const maxLength = Math.max(
    ...directories.map((directory) => directory.length),
    ...regularFiles.map((file) => file.length)
  );

  // Генерация разграничивающей строки
  const separator = '-'.repeat(maxLength + 8);

  // Вывод списка в консоль
  console.log('\x1b[32m%s\t%s\x1b[0m', 'Имя'.padEnd(maxLength), 'Тип');
  console.log('\x1b[32m%s\x1b[0m', separator);

  directories.forEach((directory) => {
    console.log('\x1b[32m%s\t%s\x1b[0m', directory.padEnd(maxLength), 'директория');
  });

  if (directories.length > 0 && regularFiles.length > 0) {
    console.log('\x1b[32m%s\x1b[0m', separator);
  }

  regularFiles.forEach((file) => {
    const fileExtension = path.extname(file);
    console.log('\x1b[32m%s\t%s\x1b[0m', file.padEnd(maxLength), `файл${fileExtension}`);
  });
});