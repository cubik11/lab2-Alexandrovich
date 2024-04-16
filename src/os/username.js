import os from 'os';

const username = os.userInfo().username;
console.log(`Системное имя пользователя: ${username}`);