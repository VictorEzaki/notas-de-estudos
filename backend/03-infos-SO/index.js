const os = require('node:os')

const plataform = os.platform()
console.log('Plataforma do Sistema: ', plataform)

const arch = os.arch()
console.log('Arquitetura do sistema: ', arch)

const cores = os.cpus()
console.log('Número de núcleos do processador: ', cores.length)

const memory = os.totalmem()
console.log('Total de memórioa: ', memory / 1024 / 1024 /1024)