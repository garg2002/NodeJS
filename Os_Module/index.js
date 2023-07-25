const { log } = require('console');
const OS = require('os');

console.log(OS.arch()); //Operating System Architecture
console.log(OS.hostname()); //Host Name
console.log(OS.platform()); //Operating System Platform
console.log(OS.cpus()); //Information about each cpu/core
 console.log(OS.freemem()); //Free Memory of the System
console.log(OS.totalmem()); //Total Memory of the System
console.log(OS.networkInterfaces()); //Information about each network interface
 console.log(OS.tmpdir()); //Information about temporary directory
 console.log(OS.type()); //Information about the operating system name