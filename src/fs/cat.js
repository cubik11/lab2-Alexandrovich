import fs from 'fs';
import { createReadStream } from 'fs';

function cat(filePath) {
  const readableStream = createReadStream(filePath, 'utf8');

  readableStream.on('data', (chunk) => {
    console.log(chunk);
  });

  readableStream.on('error', (err) => {
    console.error(err);
  });
}

// Пример использования функции cat для файла
const filePath = 'path_to_file'; // Замените 'path_to_file' на путь к нужному файлу
cat(filePath);