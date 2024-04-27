export const printHelp = async () => {
    console.log(`${(`ПОМОЩЬ`)}
      up - Перейти на уровень выше в текущей директории;
      cd - Перейти в указанную папку относительно текущей директории;
      ls - Вывести список файлов и папок в текущей директории.
  
      cat путь_к_файлу - Прочитать файл и вывести его содержимое в консоль;
      add имя_нового_файла - Создать пустой файл в текущей рабочей директории;
      rn путь_к_файлу новое_имя - Переименовать файл;
      cp путь_к_файлу путь_к_новой_папке - Скопировать файл;
      mv путь_к_файлу путь_к_новой_папке - Переместить файл;
      rm путь_к_файлу - Удалить файл;
  
      os --EOL - Получить символ конца строки (End-Of-Line) по умолчанию для системы и вывести его в консоль;
      os --cpus - Получить информацию о процессорах хостовой машины и вывести ее в консоль;
      os --homedir - Получить домашнюю директорию и вывести ее в консоль;
      os --username - Получить имя текущего пользователя системы и вывести его в консоль;
      os --architecture - Получить архитектуру процессора, для которого скомпилирован бинарный файл Node.js, и вывести ее в консоль;
  
      hash путь_к_файлу - Рассчитать хэш для файла и вывести его в консоль;
  
      compress путь_к_файлу путь_назначения - Сжать файл;
      decompress путь_к_файлу путь_назначения - Распаковать файл;
    `);
  };