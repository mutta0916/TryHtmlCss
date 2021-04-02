const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//サーバー作成
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

//サーバー起動
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});