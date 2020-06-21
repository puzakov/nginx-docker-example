const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf8"
  });
  
  res.write(`
    <h2>${os.hostname()}</h2>
    <h2>${os.type()}</h2>
    <h2>${os.release()}</h2>
    <p>${process.argv.join('<br/>')}</p>
  `);
  res.end();
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running. port ${PORT}`);
});
