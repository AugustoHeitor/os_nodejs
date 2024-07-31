// Importando o módulo (os) de node.js
const os = require('os');

function getFreeMemoryInGB() {
    const freeMemoryInBytes = os.freemem();
    const freeMemoryInGB = (freeMemoryInBytes / (1024 ** 3)).toFixed(2); // Convertendo bytes para gigabytes
    return freeMemoryInGB;
}

console.log(`Memória livre no sistema: ${getFreeMemoryInGB()} GB`);