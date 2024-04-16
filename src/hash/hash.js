import fs from 'fs';
import crypto from 'crypto';

const pathToFile = 'путь_к_файлу';

// Чтение файла
const fileData = fs.readFileSync(pathToFile);

// Создание хэша
const hash = crypto.createHash('sha256').update(fileData).digest('hex');

console.log(`Хэш файла: ${hash}`);