import fs from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const pathToFile = 'путь_к_файлу';
const pathToDestination = 'путь_к_файлу_назначения';

// Создание потока для чтения сжатого файла
const readStream = createReadStream(pathToFile);

// Создание потока для записи распакованных данных в файл назначения
const writeStream = createWriteStream(pathToDestination);

// Создание потока для распаковки данных с алгоритмом Brotli
const brotliStream = zlib.createBrotliDecompress();

// Подключение потоков
readStream.pipe(brotliStream).pipe(writeStream);

// Обработка событий окончания распаковки
writeStream.on('finish', () => {
  console.log('Файл успешно распакован.');
});

// Обработка ошибок
writeStream.on('error', (error) => {
  console.error('Произошла ошибка при распаковке файла:', error);
});