import fs from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const pathToFile = 'путь_к_файлу';
const pathToDestination = 'путь_к_файлу_назначения';

// Создание потока для чтения исходного файла
const readStream = createReadStream(pathToFile);

// Создание потока для записи сжатых данных в файл назначения
const writeStream = createWriteStream(pathToDestination);

// Создание потока для сжатия данных с алгоритмом Brotli
const brotliStream = zlib.createBrotliCompress();

// Подключение потоков
readStream.pipe(brotliStream).pipe(writeStream);

// Обработка событий окончания сжатия
writeStream.on('finish', () => {
  console.log('Файл успешно сжат.');
});

// Обработка ошибок
writeStream.on('error', (error) => {
  console.error('Произошла ошибка при сжатии файла:', error);
});