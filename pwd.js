const done = require("./bash");

// module.exports = function () {
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    done(process.cwd());
  }
});
// };
