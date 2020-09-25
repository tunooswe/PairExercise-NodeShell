const pwd = require("./pwd");
const cat = require("./cat");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

// pwd();
// cat();

module.exports = done;
