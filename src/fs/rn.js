import { rename } from 'fs';

function renameFile(oldFilePath, newFilePath) {
  rename(oldFilePath, newFilePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Файл успешно переименован в ${newFilePath}.`);
  });
}

// Пример использования функции renameFile для переименования файла
const oldFilePath = 'path_to_file'; // Замените 'path_to_file' на путь к существующему файлу
const newFilePath = 'new_filename'; // Замените 'new_filename' на желаемое новое имя файла
renameFile(oldFilePath, newFilePath);