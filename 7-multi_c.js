const { argv } = require("node:process");

const args = argv.slice(2);
const num = Number(args[0]);

if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;

  if (num > 0) {
    do {
      console.log("C is fun");
      i++;
    } while (i < num);
  }
}
