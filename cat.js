module.exports = function () {
  process.stdout.write("prompt > ");

  const fs = require("fs");

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim().split(" ")[0];
    const nameOfFile = data.toString().trim().split(" ")[1];
    if (cmd === "cat") {
      fs.readFile(nameOfFile, "utf8", (err, data) => {
        if (err) throw err;
        else {
          process.stdout.write(data);
          process.stdout.write("prompt > ");
        }
      });
    }
  });
};
