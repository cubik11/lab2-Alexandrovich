import os from 'os';

const cpus = os.cpus();
console.log('Информация о процессорах:');

cpus.forEach((cpu, index) => {
  const model = cpu.model;
  const speed = (cpu.speed / 1000).toFixed(2); // Преобразуем тактовую частоту в ГГц

  console.log(`Процессор ${index + 1}:`);
  console.log(`Модель: ${model}`);
  console.log(`Тактовая частота: ${speed} ГГц`);
  console.log('-----------------------------------');
});