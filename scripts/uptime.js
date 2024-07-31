// Importando o módulo (os) de node.js
const os = require('os');

const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);

console.log(`O sistema está em funcionamento há ${hours} horas, ${minutes} minutos e ${seconds} segundos.`);