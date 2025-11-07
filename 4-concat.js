const { argv } = require("node:process");

const args = argv.slice(2);

console.log(`${args[0]} is ${args[1]}`);
