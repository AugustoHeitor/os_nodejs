// Importando o módulo (os) de node.js
const os = require('os');

// Constantes de permissões de leitura, escrita e execução
const permReadUser = os.constants.S_IRUSR; // Leitura para o proprietário do arquivo
const permWriteUser = os.constants.S_IWUSR; // Escrita para o proprietário do arquivo
const permExecuteUser = os.constants.S_IXUSR; // Execução para o proprietário do arquivo

const permReadGroup = os.constants.S_IRGRP; // Leitura para o grupo
const permWriteGroup = os.constants.S_IWGRP; // Escrita para o grupo
const permExecuteGroup = os.constants.S_IXGRP; // Execução para o grupo

const permReadOthers = os.constants.S_IROTH; // Leitura para outros
const permWriteOthers = os.constants.S_IWOTH; // Escrita para outros
const permExecuteOthers = os.constants.S_IXOTH; // Execução para outros

// Exemplo combinando permissões de leitura e escrita para o proprietário
const readWriteUser = permReadUser | permWriteUser;
console.log('Permissões de leitura e escrita para o proprietário:', readWriteUser);

// Exemplo combinando permissões de leitura para todos
const readAll = permReadUser | permReadGroup | permReadOthers;

console.log('Permissões de leitura para o proprietário, grupo e outros:', readAll);

// Exemplo combinando permissões de leitura, escrita e execução para todos
const fullPermissions = permReadUser | permWriteUser | permExecuteUser |
    permReadGroup | permWriteGroup | permExecuteGroup |
    permReadOthers | permWriteOthers | permExecuteOthers;

console.log('Permissões completas (leitura, escrita e execução) para todos:', fullPermissions);