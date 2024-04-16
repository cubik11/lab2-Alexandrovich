import { createReadStream, createWriteStream } from 'fs';

function copyFile(sourceFilePath, destinationFilePath) {
  const readableStream = createReadStream(sourceFilePath);
  const writableStream = createWriteStream(destinationFilePath);

  readableStream.pipe(writableStream);

  readableStream.on('error', (err) => {
    console.error(`Ошибка чтения файла: ${err}`);
  });

  writableStream.on('error', (err) => {
    console.error(`Ошибка записи файла: ${err}`);
  });

  writableStream.on('finish', () => {
    console.log(`Файл успешно скопирован в ${destinationFilePath}`);
  });
}

// Пример использования функции copyFile для копирования файла
const sourceFilePath = 'path_to_file'; // Замените 'path_to_file' на путь к исходному файлу
const destinationFilePath = 'path_to_new_directory/new_filename'; // Замените 'path_to_new_directory/new_filename' на путь к новому файлу и его имя
copyFile(sourceFilePath, destinationFilePath);