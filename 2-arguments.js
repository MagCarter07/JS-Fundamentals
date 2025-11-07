const { argv } = require("node:process");

const args = argv.slice(2);
const count = args.length;

if (count === 0) {
  console.log("No argument");
} else if (count === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
