import { createReadStream, createWriteStream, rename } from 'fs';

function moveFile(sourceFilePath, destinationFilePath) {
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
    rename(sourceFilePath, destinationFilePath, (err) => {
      if (err) {
        console.error(`Ошибка перемещения файла: ${err}`);
        return;
      }

      console.log(`Файл успешно перемещен в ${destinationFilePath}`);
    });
  });
}

// Пример использования функции moveFile для перемещения файла
const sourceFilePath = 'path_to_file'; // Замените 'path_to_file' на путь к исходному файлу
const destinationFilePath = 'path_to_new_directory/new_filename'; // Замените 'path_to_new_directory/new_filename' на путь к новому файлу и его имя
moveFile(sourceFilePath, destinationFilePath);