import { unlink } from 'fs';

function deleteFile(filePath) {
  unlink(filePath, (err) => {
    if (err) {
      console.error(`Ошибка удаления файла: ${err}`);
      return;
    }

    console.log(`Файл успешно удален: ${filePath}`);
  });
}

// Пример использования функции deleteFile для удаления файла
const filePath = 'path_to_file'; // Замените 'path_to_file' на путь к файлу, который вы хотите удалить
deleteFile(filePath);