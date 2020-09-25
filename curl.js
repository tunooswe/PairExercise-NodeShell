const request = require("request");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ")[0];
  const siteUrl = data.toString().trim().split(" ")[1];
  if (cmd === "curl") {
    request(siteUrl, (error, response, body) => {
      if (error) throw error;
      else {
        process.stdout.write(`statusCode: ${response && response.statusCode}`); // Print the response status code if a response was received
        process.stdout.write(`body: ${body}`); // Print the HTML for the Google homepage.
      }
    });
  }
});
