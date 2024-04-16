import { writeFile } from 'fs';

function addNewFile(fileName) {
  const filePath = `./${fileName}`;

  writeFile(filePath, '', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Файл ${fileName} успешно создан.`);
  });
}

// Пример использования функции addNewFile для создания файла
const fileName = 'new_file_name'; // Замените 'new_file_name' на желаемое имя файла
addNewFile(fileName);